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
            Make a GET or POST request at &nbsp;
            <kbd>https://ticktick-events.vercel.app/api/events</kbd>
        </p>
        <table style="margin: 0 auto 0 auto;">
            <tr>
                <td>
                    <b>showEnd (true)</b>
                </td>
                <td> Show end dates </td>
            </tr>
            <tr>
                <td>
                    <b>maxEvents (all)</b>
                </td>
                <td> Maximum number of events to be returned </td>
            </tr>
            <tr>
                <td>
                    <b>hash (null)</b>
                </td>
                <td> Hash of previous call. Used to check if modified </td>
            </tr>
            <tr>
                <td>
                    <b>pretty (false)</b>
                </td>
                <td> Pretty print the returned JSON </td>
            </tr>
            <tr>
                <td>
                    <b>weather (false)</b>
                </td>
                <td> Include weather data </td>
            </tr>
            <tr>
                <td>
                    <b>lat (null)</b>
                </td>
                <td> Position latitude </td>
            </tr>
            <tr>
                <td>
                    <b>lon (null)</b>
                </td>
                <td> Position longitude </td>
            </tr>
        </table>
    </div>
    <div class="codes">
        <!-- prettier-ignore -->
        <div class="">
        	<div class="code-wrapper">
	<pre><code class="code">&lbrace;
  <span>"id"</span>: <span class="b">[TickTickID]</span>,
  <span>"showEnd"</span>: <span class="b">true</span>,
  <span>"maxEvents"</span>: <span class="b">4</span>,
  <span>"hash"</span>: <span class="b">[hash]</span>,
  <span>"pretty"</span>: <span class="b">true</span>,
  <span>"weater"</span>: <span class="b">false</span>,
  <span>"lat"</span>: <span class="b">null</span>,
  <span>"lon"</span>: <span class="b">null</span>
&rbrace;</code></pre>
			</div>

			<!-- Credit: @scottzirkel -->
	<hr class="hr-text" data-content="OR" />

        	<div class="code-wrapper">
	<pre><code class="code"><span>?id=</span><span class="b">[TickTickID]</span>
<span>&showEnd=</span><span class="b">true</span>
<span>&maxEvents=</span><span class="b">4</span>
<span>&hash=</span><span class="b">[hash]</span>
<span>&pretty=</span><span class="b">true</span>
<span>&weater=</span><span class="b">false</span>
<span>&amp;lat=</span><span class="b">null</span>
<span>&lon=</span><span class="b">null</span>
</code></pre>
			</div>
			<br>
		</div>

        <span class="arrow" style="width: 3em; text-align:center;"> → </span>

        <!-- prettier-ignore -->
        <div class="code-wrapper">
	<pre><code class="code">&lbrace;
  <span>"hash"</span>: <span class="b">"85d49e"</span>,
  <span>"timestamp"</span>: <span class="b">"2022-05-03T17:30:23.578+00:00"</span>,
  <span>"events"</span>: [
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-05-03T20:00:00.000"</span>,
      <span>"end"</span>: <span class="b">"2022-05-03T20:30:00.000"</span>,
      <span>"title"</span>: <span class="b">"Very Cool Event"</span>,
      <span>"TZ"</span>: <span class="b">"America/New_York"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-05-04T00:00:00.000"</span>,
      <span>"title"</span>: <span class="b">"Something important"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-06-24T08:00:00.000"</span>,
      <span>"end"</span>: <span class="b">"2022-06-24T08:30:00.000"</span>,
      <span>"title"</span>: <span class="b">"Pool Party"</span>,
      <span>"TZ"</span>: <span class="b">"America/New_York"</span>
    &rbrace;,
    &lbrace;
      <span>"start"</span>: <span class="b">"2022-06-26T00:00:00.000"</span>,
      <span>"title"</span>: <span class="b">"Write that line of code"</span>
    &rbrace;
  ],
  <span>"weather"</span>: &lbrace;
      <span>"current"</span>: <span class="b">16</span>,
      <span>"code"</span>: <span class="b">0</span>,
      <span>"high"</span>: <span class="b">21</span>,
      <span>"low"</span>: <span class="b">11</span>
  &rbrace;
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

<script>
    import github from "./assets/github-icon.svg?raw";
</script>

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
    .hr-text {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: black;
        text-align: center;
        height: 1.5em;
        opacity: 0.5;
    }
    .hr-text:before {
        content: "";
        background: white;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 2px;
    }
    .hr-text:after {
        content: attr(data-content);
        position: relative;
        display: inline-block;

        padding: 0 0.5em;
        line-height: 1.5em;
        color: white;
        background-color: #16191b;
    }
</style>
