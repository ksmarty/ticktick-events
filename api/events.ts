import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "cross-fetch";
import ical from "ical.js";
import { DateTime } from "luxon";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const {
        id,
        showEnd = "true",
        maxEvents = 0,
    } = request.body || request.query;

    const keepEndDates = showEnd === "true" ? true : undefined;

    if (!id) throw new Error("Invalid ID!");

    const res = await fetch(
        `https://api.ticktick.com/pub/calendar/feeds/${id}`
    );

    if (res.status >= 400) throw new Error("Bad response from server!");

    const raw_ical = await res.text();

    const events: Event[] = ical
        .parse(raw_ical)[2]
        .map(([, event]: [string, any[], any[]]) =>
            event.reduce(
                (props, prop) => ({ ...props, [prop[0]]: prop.slice(1) }),
                {}
            )
        )
        .map(({ dtstart, dtend, summary }: RawEvent) => ({
            start: date(dtstart[2]),
            end: keepEndDates && dtend && date(dtend?.[2]),
            title: summary[2],
            TZ: dtstart[0]?.tzid,
        }));

    events.sort(({ start: a }, { start: b }) => (a < b ? -1 : 1));

    const TZ = events?.[0]?.TZ ?? "America/New_York";
    const timestamp = DateTime.now().setZone(TZ);

    const data = {
        timestamp,
        events: maxEvents == 0 ? events : events.slice(0, maxEvents),
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