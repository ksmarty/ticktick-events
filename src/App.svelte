<script>
	import github from "./assets/github-icon.svg?raw";
</script>

<main>
	<div class="text-block">
		<h1>
			<a
				href="https://github.com/ksmarty/ticktick-events"
				target="_blank"
			>
				TickTick Events
			</a>
		</h1>

		<p class="sub">
			A middleman API that powers <a
				href="https://github.com/ksmarty/ticktick-display-reborn"
				>TickTick Display Reborn</a
			>
		</p>

		<p>
			This is a public instance. Feel free to use it, but please don't
			abuse it.
		</p>
		<p>
			Make a POST request at &nbsp;
			<kbd>https://ticktick-events.vercel.app/api/events</kbd>
		</p>
		<p style="margin-bottom: 0em;">
			Optionally, pass a voltage,
			<a
				href="https://docs.upstash.com/redis/features/restapi"
				target="_blank"
			>
				Upstash URL & token
			</a> to map out the voltage drain over time.
		</p>
	</div>
	<div class="codes">
		<!-- prettier-ignore -->
		<div class="code-wrapper">
	<pre><code class="code">&lbrace;
  <span>"id"</span>: <span class="b">[TickTickID]</span>,
  <span>"voltage"</span>: <span class="b">3.2501</span>,
  <span>"upstash_url"</span>: <span class="b">[URL]</span>,
  <span>"upstash_token"</span>: <span class="b">[TOKEN]</span>
&rbrace;</code></pre>
		</div>

		<span class="arrow"> → </span>

		<!-- prettier-ignore -->
		<div class="code-wrapper">
	<pre><code class="code">&lbrace;
  <span>"timestamp"</span>: <span class="b">"2022-05-03T17:30:23.578+00:00"</span>,
  <span>"events"</span>: [
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-05-03T20:00:00.000"</span>,
      <span>"end"</span>: <span class="b">"2022-05-03T20:30:00.000"</span>,
      <span>"title"</span>: <span class="b">"Very Cool Event"</span>,
      <span>"description"</span>: <span class="b">"This is gonna be an epic event"</span>,
      <span>"TZ"</span>: <span class="b">"America/New_York"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-05-04T00:00:00.000"</span>,
      <span>"title"</span>: <span class="b">"Something important"</span>,
      <span>"description"</span>: <span class="b">"Very important"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-06-24T08:00:00.000"</span>,
      <span>"end"</span>: <span class="b">"2022-06-24T08:30:00.000"</span>,
      <span>"title"</span>: <span class="b">"Pool Party"</span>,
      <span>"description"</span>: <span class="b">""</span>,
      <span>"TZ"</span>: <span class="b">"America/New_York"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-06-26T00:00:00.000"</span>,
      <span>"title"</span>: <span class="b">"Write that line of code"</span>,
      <span>"description"</span>: <span class="b">"[x,y] = [y,x]"</span>
    &rbrace;
  ]
&rbrace;</code></pre>
		</div>
	</div>

	<div class="text-block">
		<a href="https://github.com/ksmarty/ticktick-events" target="_blank">
			{@html github}
			View Code on GitHub
		</a>
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;700&display=swap");

	:global(html, body, #app) {
		background: #16191b;
		color: #bdb7af;
		margin: 0;
		height: 100%;
		width: 100%;
	}
	main {
		font-family: "Lexend Deca", sans-serif;
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	:global(svg) {
		height: 1.25em;
		vertical-align: sub;
		margin-right: 0.25em;
		width: 1.25em;
		color: #ff6d6d;
	}
	h1 {
		color: #ff6d6d;
		margin: 0;
	}
	.sub {
		margin: 1.5em auto 2em;
		background-color: #ff6d6d;
		line-height: 1em;
		color: #16191b;
		width: fit-content;
		-webkit-box-shadow: 0px 0px 10px 10px #ff6d6d;
		-moz-box-shadow: 0px 0px 10px 10px #ff6d6d;
		box-shadow: 0px 0px 10px 10px #ff6d6d;
	}
	.b {
		color: #ff6d6d;
		background: #00000000;
	}
	.codes {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0;
	}
	.arrow {
		display: none;
		font-size: x-large;
	}
	@media screen and (min-width: 768px) {
		.codes {
			flex-direction: row;
			gap: 1em;
		}
		.arrow {
			display: initial;
		}
	}
	.code-wrapper {
		background: #202325;
		width: fit-content;
		margin: 1em auto;
		padding: 1em;
		box-shadow: 0 4px 8px 0 #00000033;
		transition: 0.3s;
		border-radius: 5px;
	}
	.code {
		color: #bdb7af;
		font-weight: 400;
		display: block;
		padding: 0.5em;
	}
	pre {
		margin: unset;
	}
	.text-block {
		text-align: center;
	}
	a {
		-moz-transition: all 0.15s ease-in;
		-o-transition: all 0.15s ease-in;
		-webkit-transition: all 0.15s ease-in;
		transition: all 0.15s ease-in;
		color: inherit;
		text-decoration: none;
		font-weight: bold;
	}
	a:hover {
		color: white;
	}
	kbd {
		white-space: nowrap;
	}
</style>
