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
		<p style="margin-bottom: 2em;">
			Make a GET request at &nbsp;
			<kbd>https://ticktick-events.vercel.app/api/[TickTick UUID]</kbd>
		</p>
	</div>

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

	<div class="text-block">
		<a href="https://github.com/ksmarty/ticktick-events" target="_blank">
			{@html github}
			View Code on GitHub
		</a>
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;700&display=swap");

	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		font-family: "Lexend Deca", sans-serif;
	}
	:global(body) {
		background: #16191b;
		color: #bdb7af;
		font-weight: 400;
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
		margin-bottom: 0.25em;
	}
	.sub {
		margin: 1.5em auto 3em;
		background-color: #ff6d6d;
		line-height: 1em;
		color: #16191b;
		width: fit-content;
		padding: 0em 1em;
		-webkit-box-shadow: 0px 0px 10px 10px #ff6d6d;
		-moz-box-shadow: 0px 0px 10px 10px #ff6d6d;
		box-shadow: 0px 0px 10px 10px #ff6d6d;
	}
	.b {
		color: #ff6d6d;
		font-weight: 400;
		background: #00000000;
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
