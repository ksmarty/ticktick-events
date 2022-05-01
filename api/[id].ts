import { NextApiRequest, NextApiResponse } from "next";
import fetch from "cross-fetch";
import { parse } from "ical.js";
import { DateTime } from "luxon";

export default async (request: NextApiRequest, response: NextApiResponse) => {
	const { id } = request.query;

	const res = await fetch(
		`https://api.ticktick.com/pub/calendar/feeds/${id}`
	);

	if (res.status >= 400) throw new Error("Bad response from server");

	const raw_ical = await res.text();

	const events: Event[] = parse(raw_ical)[2]
		.map(([ignore, event]: [string, any[], any[]]) =>
			event.reduce(
				(props, prop) => ({ ...props, [prop[0]]: prop.slice(1) }),
				{}
			)
		)
		.map(({ dtstart, dtend, summary, description }: RawEvent) => ({
			start: DateTime.fromISO(dtstart[2]).setZone(dtstart[0]?.tzid),
			end: dtend && DateTime.fromISO(dtend?.[2]).setZone(dtend[0]?.tzid),
			title: summary[2],
			description: description[2],
			// TZ: dtstart[0]?.tzid,
		}));

	events.sort(({ start: a }, { start: b }) => (a < b ? -1 : 1));

	const TZ = events?.[0].start?.zoneName ?? "America/New_York";
	const timestamp = DateTime.now().setZone(TZ);

	const data = {
		timestamp,
		events,
	};

	response.end(JSON.stringify(data, undefined, 2));
};

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
	start: DateTime;
	end?: DateTime;
	title: string;
	description: string;
}
