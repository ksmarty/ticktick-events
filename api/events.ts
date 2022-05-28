import { NextApiRequest, NextApiResponse } from "next";
import fetch from "cross-fetch";
import { parse } from "ical.js";
import { DateTime } from "luxon";
import { Redis } from "@upstash/redis";

export default async (request: NextApiRequest, response: NextApiResponse) => {
	const { id, voltage, upstash_url, upstash_token } = request.body;

	if (voltage && upstash_url && upstash_token)
		await new Redis({ url: upstash_url, token: upstash_token }).set(
			DateTime.now().toISO(),
			voltage
		);

	const res = await fetch(
		`https://api.ticktick.com/pub/calendar/feeds/${id}`
	);

	if (res.status >= 400) throw new Error("Bad response from server");

	const raw_ical = await res.text();

	const events: Event[] = parse(raw_ical)[2]
		.map(([, event]: [string, any[], any[]]) =>
			event.reduce(
				(props, prop) => ({ ...props, [prop[0]]: prop.slice(1) }),
				{}
			)
		)
		.map(({ dtstart, dtend, summary, description }: RawEvent) => ({
			start: date(dtstart[2]),
			end: dtend && date(dtend?.[2]),
			title: summary[2],
			description: description[2],
			TZ: dtstart[0]?.tzid,
		}));

	events.sort(({ start: a }, { start: b }) => (a < b ? -1 : 1));

	const TZ = events?.[0]?.TZ ?? "America/New_York";
	const timestamp = DateTime.now().setZone(TZ);

	const data = {
		timestamp,
		events,
	};

	response.end(JSON.stringify(data, undefined, 2));
};

const date = (d: string) =>
	DateTime.fromISO(d, { zone: "utc" }).toISO().slice(0, -1);

type EventProps = [Props, string, string];

interface Props {
	tzid?: string;
}

interface RawEvent {
	dtstamp: EventProps;
	dtstart: EventProps;
	dtend?: EventProps;
	summary: EventProps;
	uid: EventProps;
	description: EventProps;
	sequence: [Props, string, number];
	tzid: EventProps;
	rrule?: [Props, string, object];
}

interface Event {
	start: string;
	end?: string;
	title: string;
	description: string;
	TZ?: string;
}
