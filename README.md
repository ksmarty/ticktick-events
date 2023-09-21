# TickTick Events

> A middleman API that powers [TickTick Display Reborn](https://github.com/ksmarty/ticktick-display-reborn).

A public instance is hosted at https://ticktick-events.vercel.app/, or you can self-host on Vercel!

## API

`/api/events`:

#### Request

```json
{
	"id": [TickTickID],
	"showEnd": true, 	// Show end dates
	"maxEvents": 4,		// Maximum number of events to be returned
	"hash": [hash],		// Hash of previous call. Used to check if modified
	"pretty": false,	// Pretty print the returned JSON
    "weater": false,    // Include weather data
    "lat": null,        // Position latitude
    "lon": null         // Position longitude
}
```

#### Response

```json
{
    "hash": "85d49e",
    "timestamp": "2022-05-03T17:30:23.578+00:00",
    "events": [
        {
            "start": "2022-05-03T20:00:00.000",
            "end": "2022-05-03T20:30:00.000",
            "title": "Very Cool Event",
            "TZ": "America/New_York"
        },
        {
            "start": "2022-05-04T00:00:00.000",
            "title": "Something important"
        },
        {
            "start": "2022-06-24T08:00:00.000",
            "end": "2022-06-24T08:30:00.000",
            "title": "Pool Party",
            "TZ": "America/New_York"
        },
        {
            "start": "2022-06-26T00:00:00.000",
            "title": "Write that line of code"
        }
    ],
    "weather": {
        "current": 16,
        "code": 0,
        "high": 22,
        "low": 12
    }
}
```
