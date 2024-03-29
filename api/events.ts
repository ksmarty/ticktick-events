import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "cross-fetch";
import ical from "ical.js";
import { DateTime } from "luxon";
import { createHash } from "crypto";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const {
        id,
        showEnd = "true",
        maxEvents = Infinity,
        pretty = "false",
        hash,
        weather = "false",
        lat,
        lon,
    } = request.body || request.query;

    const keepEndDates = showEnd === "true" ? true : undefined;

    if (!id) return response.status(400).json({ error: "ID not included!" });

    const events: Event[] = await fetch(
        `https://api.ticktick.com/pub/calendar/feeds/${id}`
    )
        .then((res) => res.text())
        .then((raw_ical) =>
            ical
                .parse(raw_ical)[2]
                .map(([, event]: [string, any[], any[]]) =>
                    event.reduce(
                        (props, prop) => ({
                            ...props,
                            [prop[0]]: prop.slice(1),
                        }),
                        {}
                    )
                )
                .map(({ dtstart, dtend, summary }: RawEvent) => ({
                    start: date(dtstart[2]),
                    end: keepEndDates && dtend && date(dtend?.[2]),
                    title: summary[2],
                    TZ: dtstart[0]?.tzid,
                }))
                .sort(({ start: a }, { start: b }) => (a < b ? -1 : 1))
                .filter((_event: Event, i: number) => i < maxEvents)
        );

    if (/Calendar subscription url not available/g.test(JSON.stringify(events)))
        return response.status(400).json({ error: "Invalid ID!" });

    const TZ = events.filter((e) => e.TZ)?.[0]?.TZ ?? "America/New_York";

    const weatherData =
        weather && lat && lon
            ? await fetch(
                  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=apparent_temperature_max,apparent_temperature_min&timezone=${TZ}&forecast_days=1&current_weather=true&hourly=is_day`
              )
                  .then((res) => res.json())
                  .then(({ current_weather, daily, hourly }) => ({
                      current: Math.round(current_weather["temperature"]),
                      code: current_weather["weathercode"],
                      high: Math.round(daily["apparent_temperature_max"][0]),
                      low: Math.round(daily["apparent_temperature_min"][0]),
                      isDay: !!hourly.is_day[DateTime.now().hour],
                  }))
            : undefined;

    const timestamp = DateTime.now().setZone(TZ);

    const generatedHash = createHash("shake128")
        .update(events.toString() + timestamp.day)
        .digest("hex")
        .substring(0, 6);

    const data = {
        hash: generatedHash,
        timestamp,
        events: hash === generatedHash ? undefined : events,
        weather: weatherData,
    };

    response.end(JSON.stringify(data, undefined, pretty == "true" ? 2 : 0));
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
