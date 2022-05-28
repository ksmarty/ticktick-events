# TickTick Events

> A middleman API that powers [TickTick Display Reborn](https://github.com/ksmarty/ticktick-display-reborn).

A public instance is hosted at https://ticktick-events.vercel.app/, or you can self-host on Vercel!

## API

`/api/events`:

#### Request

```json
{
	"id": [TickTickID],
	"voltage": 3.2501,
	"upstash_url": [URL],
	"upstash_token": [TOKEN]
}
```

#### Response

```json
{
	"timestamp": "2022-05-03T17:30:23.578+00:00",
	"events": [
		{
			"start": "2022-05-03T20:00:00.000",
			"end": "2022-05-03T20:30:00.000",
			"title": "Very Cool Event",
			"description": "This is gonna be an epic event",
			"TZ": "America/New_York"
		},
		{
			"start": "2022-05-04T00:00:00.000",
			"title": "Something important",
			"description": "Very important"
		},
		{
			"start": "2022-06-24T08:00:00.000",
			"end": "2022-06-24T08:30:00.000",
			"title": "Pool Party",
			"description": "",
			"TZ": "America/New_York"
		},
		{
			"start": "2022-06-26T00:00:00.000",
			"title": "Write that line of code",
			"description": "[x,y] = [y,x]"
		}
	]
}
```
