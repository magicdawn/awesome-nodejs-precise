
# awesome-nodejs-precise
> list taken from [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs/), with star shown

## TOC
[Mad science](#mad-science)
[Command-line apps](#command-line-apps)
[Functional programming](#functional-programming)
[HTTP](#http)
[Debugging / Profiling](#debugging-profiling)
[Logging](#logging)
[Command-line utilities](#command-line-utilities)
[Build tools](#build-tools)
[Hardware](#hardware)
[Templating](#templating)
[Web frameworks](#web-frameworks)
[Documentation](#documentation)
[Filesystem](#filesystem)
[Control flow Promises](#control-flow-promises)
[Control flow Callbacks](#control-flow-callbacks)
[Control flow Generators](#control-flow-generators)
[Control flow Streams](#control-flow-streams)
[Control flow Channels](#control-flow-channels)
[Control flow Other](#control-flow-other)
[Streams](#streams)
[Real-time](#real-time)
[Image](#image)
[Text](#text)
[Number](#number)
[Math](#math)
[Date](#date)
[URL](#url)
[Data validation](#data-validation)
[Parsing](#parsing)
[Humanize](#humanize)
[Compression](#compression)
[Network](#network)
[Database Drivers](#database-drivers)
[Database ODM / ORM](#database-odm-orm)
[Database Query builder](#database-query-builder)
[Database Other](#database-other)
[Testing](#testing)
[Security](#security)
[Benchmarking](#benchmarking)
[Minifiers](#minifiers)
[Authentication](#authentication)
[Email](#email)
[Job queues](#job-queues)
[Node.js management](#node-js-management)
[Polyfills Node.js](#polyfills-node-js)
[Polyfills JavaScript](#polyfills-java-script)
[Natural language processing](#natural-language-processing)
[Process management](#process-management)
[Automation](#automation)
[AST](#ast)
[Static site generators](#static-site-generators)
[Content management systems](#content-management-systems)
[Forum](#forum)
[Blogging](#blogging)
[Weird](#weird)
[Miscellaneous](#miscellaneous)
[Tutorials](#tutorials)
[Discovery](#discovery)
[Articles](#articles)
[Newsletters](#newsletters)
[Videos](#videos)
[Podcasts](#podcasts)
[Books](#books)
[Blogs](#blogs)
[Courses](#courses)
[Cheatsheets](#cheatsheets)
[Tools](#tools)
[Community](#community)
[Miscellaneous](#miscellaneous)

## Packages
### Mad science
|name|star|description|
|----|----|-----------|
| [webtorrent](https://github.com/feross/webtorrent) | not available now | Streaming torrent client for Node.js and the browser. |
| [GitTorrent](https://github.com/cjb/GitTorrent) | not available now | Peer-to-peer network of Git repositories being shared over BitTorrent. |
| [peerflix](https://github.com/mafintosh/peerflix) | not available now | Streaming torrent client. |
| [dat](http://dat-data.com) | not available now | Real-time replication and versioning for data sets. |
| [ipfs](https://github.com/ipfs/js-ipfs) | not available now | Distributed file system that seeks to connect all computing devices with the same system of files. |
| [stackgl](http://stack.gl) | not available now | Open software ecosystem for WebGL, built on top of browserify and npm. |
| [peerwiki](https://github.com/mafintosh/peerwiki) | not available now | All of Wikipedia on BitTorrent. |
| [peercast](https://github.com/mafintosh/peercast) | not available now | Stream a torrent video to Chromecast. |
| [BitcoinJS](http://bitcoinjs.org) | not available now | Clean, readable, proven Bitcoin library. |
| [Bitcore](https://bitcore.io) | not available now | A pure and powerful Bitcoin library. |
| [PDFKit](http://pdfkit.org) | not available now | PDF generation library. |
| [turf](https://github.com/Turfjs/turf) | not available now | Modular geospatial processing and analysis engine. |
| [webcat](https://github.com/mafintosh/webcat) | not available now | p2p pipe across the web using WebRTC that uses your GitHub private/public key for authentication. |
| [js-git](https://github.com/creationix/js-git) | not available now | JavaScript implementation of Git. |
| [NodeOS](http://node-os.com) | not available now | The first operating system powered by npm. |
| [limdu](https://github.com/erelsgl/limdu) | not available now | Machine-learning framework. |
| [Cytoscape.js](http://js.cytoscape.org) | not available now | Graph theory (a.k.a. network) modeling and analysis. |
| [kad](https://github.com/kadtools/kad) | not available now | Kademlia distributed hash table. |


### Command-line apps
|name|star|description|
|----|----|-----------|
| [pageres](https://github.com/sindresorhus/pageres) | not available now | Capture website screenshots. |
| [trash](https://github.com/sindresorhus/trash) | not available now | A safer alternative to <code>rm</code>. |
| [npm-name](https://github.com/sindresorhus/npm-name) | not available now | Check whether a package name is available on npm. |
| [XO](https://github.com/sindresorhus/xo) | not available now | Enforce strict code style using the JavaScript happiness style. |
| [speed-test](https://github.com/sindresorhus/speed-test) | not available now | Test your internet connection speed and ping. |
| [np](https://github.com/sindresorhus/np) | not available now | A better <code>npm publish</code>. |
| [yo](https://github.com/yeoman/yo) | not available now | Run Yeoman generators. |
| [Babel](https://babeljs.io/docs/usage/cli/) | not available now | Use next generation JavaScript, today. |
| [ESLint](http://eslint.org) | not available now | The pluggable linting utility for JavaScript. |
| [Standard](https://github.com/feross/standard) | not available now | JavaScript Standard Style &#x2014; One style to rule them all. |
| [cpy](https://github.com/sindresorhus/cpy) | not available now | Copy files. |
| [fkill](https://github.com/sindresorhus/fkill-cli) | not available now | Fabulously kill processes. Cross-platform. |
| [vantage](https://github.com/dthree/vantage) | not available now | Distributed, realtime CLI for your live app. |
| [vtop](https://github.com/MrRio/vtop) | not available now | More better top, with nice charts. |
| [tmpin](https://github.com/sindresorhus/tmpin) | not available now | Adds stdin support to any CLI app that accepts file input. |
| [empty-trash](https://github.com/sindresorhus/empty-trash) | not available now | Empty the trash. |
| [is-up](https://github.com/sindresorhus/is-up) | not available now | Check whether a website is up or down. |
| [is-online](https://github.com/sindresorhus/is-online) | not available now | Check if the internet connection is up. |
| [public-ip](https://github.com/sindresorhus/public-ip) | not available now | Get your public IP address. |
| [dark-mode](https://github.com/sindresorhus/dark-mode) | not available now | Toggle the macOS Dark Mode. |
| [ttystudio](https://github.com/chjj/ttystudio) | not available now | Record your terminal and compile it to a GIF or APNG without any external dependencies, bash scripts, gif concatenation, etc. |
| [David](https://github.com/alanshaw/david) | not available now | Tells you when your package npm dependencies are out of date. |
| [http-server](https://github.com/indexzero/http-server) | not available now | Simple, zero-config command-line HTTP server. |
| [Live Server](https://github.com/tapio/live-server) | not available now | A simple development HTTP-server with livereload capability. |
| [bcat](https://github.com/kessler/node-bcat) | not available now | Pipe command output to web browsers. |
| [normit](https://github.com/pawurb/normit) | not available now | Google Translate with speech synthesis in your terminal. |
| [slap](https://github.com/slap-editor/slap) | not available now | Sublime-like terminal-based text editor. |
| [jsinspect](https://github.com/danielstjules/jsinspect) | not available now | Detect copy-pasted and structurally similar code. |
| [esformatter](https://github.com/millermedeiros/esformatter) | not available now | JavaScript code beautifier/formatter. |
| [pjs](https://github.com/danielstjules/pjs) | not available now | Pipeable JavaScript. Quickly filter, map, and reduce from the terminal. |
| [license-checker](https://github.com/davglass/license-checker) | not available now | Check licenses of your app&apos;s dependencies. |
| [browser-run](https://github.com/juliangruber/browser-run) | not available now | Easily run code in a browser environment. |
| [modhelp](https://github.com/runvnc/modhelp) | not available now | Syntax-highlighted module READMEs in terminal with ANSI-friendly pager. |
| [wifi-password](https://github.com/kevva/wifi-password) | not available now | Get the current wifi password. |
| [wallpaper](https://github.com/sindresorhus/wallpaper) | not available now | Change the desktop wallpaper. |
| [brightness](https://github.com/kevva/brightness-cli) | not available now | Change the screen brightness. |
| [torrent](https://github.com/maxogden/torrent) | not available now | Download torrents. |
| [tfa](https://github.com/jasnell/tfa) | not available now | Two-factor authentication client. |
| [rtail](https://github.com/kilianc/rtail) | not available now | Terminal output to the browser in seconds, using UNIX pipes. |
| [kill-tabs](https://github.com/sindresorhus/kill-tabs) | not available now | Kill all Chrome tabs to improve performance, decrease battery usage, and save memory. |
| [alex](https://github.com/wooorm/alex) | not available now | Catch insensitive, inconsiderate writing. |
| [pen](https://github.com/noraesae/pen) | not available now | Live Markdown preview in the browser from your favorite editor. |
| [subdownloader](https://github.com/beatfreaker/subdownloader) | not available now | Subtitle downloader for movies and TV series. |
| [iponmap](https://github.com/nogizhopaboroda/iponmap) | not available now | IP location finder. |
| [Jsome](https://github.com/Javascipt/Jsome) | not available now | Pretty prints JSON with configurable colors and indentation. |
| [itunes-remote](https://github.com/mischah/itunes-remote) | not available now | Interactively control iTunes. |
| [dev-time](https://github.com/samverschueren/dev-time-cli) | not available now | Get the current local time of a GitHub user. |
| [text-meme](https://github.com/beatfreaker/text-meme-cli) | not available now | Generate a text meme. |
| [mobicon](https://github.com/samverschueren/mobicon-cli) | not available now | Mobile app icon generator. |
| [mobisplash](https://github.com/samverschueren/mobisplash-cli) | not available now | Mobile app splash screen generator. |
| [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) | not available now | Pretty git diff to HTML generator. |
| [Cash](https://github.com/dthree/cash) | not available now | Cross-platform Unix shell commands in pure JavaScript. |
| [vaca](https://github.com/sindresorhus/vaca) | not available now | Get a random ASCII <g-emoji alias="cow" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f42e.png">&#x1F42E;</g-emoji>. |
| [gh-home](https://github.com/sindresorhus/gh-home) | not available now | Open the GitHub page of the repo in the current directory. |
| [npm-home](https://github.com/sindresorhus/npm-home) | not available now | Open the npm page of a package. |
| [trymodule](https://github.com/VictorBjelkholm/trymodule) | not available now | Try out npm packages in the terminal. |
| [terminal-recorder](https://github.com/cortezcristian/terminal-recorder) | not available now | Record your terminal usage and export it to interactive HTML. |
| [jscpd](https://github.com/kucherenko/jscpd) | not available now | Copy/paste detector for source code. |
| [atmo](https://github.com/Raathigesh/Atmo) | not available now | Server-side API mocking. |


### Functional programming
|name|star|description|
|----|----|-----------|
| [lodash](https://lodash.com) | not available now | A utility library delivering consistency, customization, performance, &amp; extras. A better and faster Underscore.js. |
| [immutable](https://github.com/facebook/immutable-js) | not available now | Immutable data collections. |
| [mori](http://swannodette.github.io/mori/) | not available now | A library for using ClojureScript&apos;s persistent data structures and supporting API from the comfort of vanilla JavaScript. |
| [Ramda](http://ramdajs.com) | not available now | A utility library with a focus on flexible functional composition enabled by automatic currying and reversed argument order. Avoids mutating data. |
| [Folktale](http://folktalejs.org) | not available now | A suite of libraries for generic functional programming in JavaScript that allows you to write elegant, modular applications with fewer bugs, and more reuse. |
| [underscore-contrib](http://documentcloud.github.io/underscore-contrib/) | not available now | The brass buckles on Underscore&apos;s utility belt. |
| [Mout](http://moutjs.com) | not available now | Utility library with the biggest difference between other existing solutions is that you can choose to load only the modules/functions that you need, no extra overhead. |
| [Bacon.js](http://baconjs.github.io) | not available now | Functional reactive programming. |
| [RxJS](http://reactivex.io) | not available now | Functional reactive library for transforming, composing, and querying various kinds of data. |
| [Lazy.js](https://github.com/dtao/lazy.js) | not available now | Utility library similar to lodash/Underscore but with lazy evaluation, which can translate to superior performance in many cases. |
| [Kefir.js](https://github.com/rpominov/kefir) | not available now | Reactive library with focus on high performance and low memory usage. |


### HTTP
|name|star|description|
|----|----|-----------|
| [got](https://github.com/sindresorhus/got) | not available now | A nicer interface to the built-in <code>http</code> module. |
| [gh-got](https://github.com/sindresorhus/gh-got) | not available now | Convenience wrapper for <code>got</code> to interact with the GitHub API. |
| [request](https://github.com/request/request) | not available now | Simplified HTTP request client. |
| [Nock](https://github.com/pgte/nock) | not available now | A HTTP mocking and expectations library. |
| [hyperquest](https://github.com/substack/hyperquest) | not available now | Streaming HTTP requests. |
| [axios](https://github.com/mzabriskie/axios) | not available now | Promise based HTTP client (works in the browser too). |
| [spdy](https://github.com/indutny/node-spdy) | not available now | Creates SPDY servers with the same API as the built-in <code>https</code> module. |
| [wreck](https://github.com/hapijs/wreck) | not available now | HTTP Client Utilities. |
| [download](https://github.com/kevva/download) | not available now | Download and extract files effortlessly. |
| [http-proxy](https://github.com/nodejitsu/node-http-proxy) | not available now | A full-featured HTTP proxy. |
| [rocky](https://github.com/h2non/rocky) | not available now | Featured, middleware-oriented HTTP proxy with traffic replay and intercept. |
| [superagent](https://github.com/visionmedia/superagent) | not available now | A small progressive HTTP request library. |
| [node-fetch](https://github.com/bitinn/node-fetch) | not available now | <code>window.fetch</code> for Node.js. |


### Debugging / Profiling
|name|star|description|
|----|----|-----------|
| [ironNode](https://github.com/s-a/iron-node) | not available now | Node.js debugger supporting ES2015 out of the box. |
| [node-inspector](https://github.com/node-inspector/node-inspector) | not available now | Debugger based on Blink Developer Tools. |
| [Theseus](https://github.com/adobe-research/theseus) | not available now | A new type of JavaScript debugger featuring real-time code coverage, retroactive inspection and asynchronous call tree. |
| [longjohn](https://github.com/mattinsler/longjohn) | not available now | Long stack traces with configurable call trace length. |
| [debug](https://github.com/visionmedia/debug) | not available now | Tiny debugging utility. |
| [jstrace](https://github.com/jstrace/jstrace) | not available now | Dynamic tracing for JavaScript, similar to dtrace, ktap etc. |
| [why-is-node-running](https://github.com/mafintosh/why-is-node-running) | not available now | Node.js is running but you don&apos;t know why? |
| [njsTrace](https://github.com/valyouw/njstrace) | not available now | Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function. |
| [vstream](https://github.com/joyent/node-vstream) | not available now | Instrumentable streams mix-ins to inspect a pipeline of streams. |
| [stackman](https://github.com/watson/stackman) | not available now | Enhance an error stacktrace with code excerpts and other goodies. |
| [TraceGL](https://github.com/traceglMPL/tracegl) | not available now | Transforms your JavaScript, injecting monitoring code that produces a log of everything that happens. |
| [locus](https://github.com/alidavut/locus) | not available now | Starts a REPL at runtime that has access to all variables. |
| [bugger](https://github.com/buggerjs/bugger) | not available now | Provides Chrome Devtools bindings to debug programs in Chrome. |
| [0x](https://github.com/davidmarkclements/0x) | not available now | Flamegraph profiling. |
| [ctrace](https://github.com/automation-stack/ctrace) | not available now | Well-formatted and improved trace system calls and signals. |


### Logging
|name|star|description|
|----|----|-----------|
| [winston](https://github.com/winstonjs/winston) | not available now | A multi-transport async logging library. |
| [Bunyan](https://github.com/trentm/node-bunyan) | not available now | A simple and fast JSON logging library. |
| [intel](http://seanmonstar.github.io/intel/) | not available now | A comprehensive logging library (handlers, filters, formatters, console injection). |
| [console-log-level](https://github.com/watson/console-log-level) | not available now | The most simple logger imaginable with support for log levels and custom prefixes. |
| [storyboard](https://github.com/guigrpa/storyboard) | not available now | End-to-end, hierarchical, real-time, colorful logs and stories. |


### Command-line utilities
|name|star|description|
|----|----|-----------|
| [chalk](https://github.com/chalk/chalk) | not available now | Terminal string styling done right. |
| [meow](https://github.com/sindresorhus/meow) | not available now | CLI app helper. |
| [minimist](https://github.com/substack/minimist) | not available now | Parse command-line flags. |
| [get-stdin](https://github.com/sindresorhus/get-stdin) | not available now | Easier stdin. |
| [user-home](https://github.com/sindresorhus/user-home) | not available now | Get the path to the user home directory. |
| [log-update](https://github.com/sindresorhus/log-update) | not available now | Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc. |
| [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) | not available now | Interactive command-line prompt. |
| [update-notifier](https://github.com/yeoman/update-notifier) | not available now | Update notifications for your CLI app. |
| [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) | not available now | ANSI escape codes for manipulating the terminal. |
| [sudo-block](https://github.com/sindresorhus/sudo-block) | not available now | Block users from running your app with root permissions. |
| [configstore](https://github.com/yeoman/configstore) | not available now | Easily load and persist config without having to think about where and how. |
| [insight](https://github.com/yeoman/insight) | not available now | Helps you understand how your tool is being used by anonymously reporting usage metrics to Google Analytics. |
| [log-symbols](https://github.com/sindresorhus/log-symbols) | not available now | Colored symbols for various log levels. |
| [figures](https://github.com/sindresorhus/figures) | not available now | Unicode symbols with Windows CMD fallbacks. |
| [boxen](https://github.com/sindresorhus/boxen) | not available now | Create boxes in the terminal. |
| [string-width](https://github.com/sindresorhus/string-width) | not available now | Get the visual width of a string - the number of columns required to display it. |
| [first-run](https://github.com/sindresorhus/first-run) | not available now | Check if it&apos;s the first time the process is run. |
| [sparkly](https://github.com/sindresorhus/sparkly) | not available now | Generate sparklines &#x2581;&#x2582;&#x2583;&#x2585;&#x2582;&#x2587; |
| [vorpal](https://github.com/dthree/vorpal) | not available now | A framework for interactive CLI apps. |
| [blessed](https://github.com/chjj/blessed) | not available now | A curses-like library. |
| [yn](https://github.com/sindresorhus/yn) | not available now | Parse yes/no like values. |
| [cli-table](https://github.com/Automattic/cli-table) | not available now | Pretty unicode tables. |
| [drawille](https://github.com/madbence/node-drawille) | not available now | Draw on the terminal with unicode braille characters. |
| [googleauth](https://github.com/maxogden/googleauth) | not available now | Create and load persistent Google authentication tokens for command-line apps. |
| [ascii-charts](https://github.com/jstrace/chart) | not available now | ASCII bar chart in the terminal. |
| [progress](https://github.com/tj/node-progress) | not available now | Flexible ascii progress bar. |
| [cli-cursor](https://github.com/sindresorhus/cli-cursor) | not available now | Toggle the CLI cursor. |
| [columnify](https://github.com/timoxley/columnify) | not available now | Create text-based columns suitable for console output. Supports cell wrapping. |
| [cli-columns](https://github.com/shannonmoeller/cli-columns) | not available now | Columnated unicode and ansi-safe text lists. |
| [cfonts](https://github.com/dominikwilkowski/cfonts) | not available now | Sexy ASCII fonts for the console. |
| [multispinner](https://github.com/codekirei/node-multispinner) | not available now | Multiple, simultaneous, individually controllable CLI spinners. |
| [omelette](https://github.com/f/omelette) | not available now | Shell autocompletion helper. |
| [cross-env](https://github.com/kentcdodds/cross-env) | not available now | Set environment variables cross-platform. |
| [shelljs](https://github.com/shelljs/shelljs) | not available now | Portable Unix shell commands. |
| [loud-rejection](https://github.com/sindresorhus/loud-rejection) | not available now | Make unhandled promise rejections fail loudly instead of the default silent fail. |
| [ora](https://github.com/sindresorhus/ora) | not available now | Elegant terminal spinner. |
| [term-img](https://github.com/sindresorhus/term-img) | not available now | Display images in your terminal. |
| [yargs](https://github.com/yargs/yargs) | not available now | Command-line parser that automatically generates an elegant user-interface. |
| [liftoff](https://github.com/js-cli/js-liftoff) | not available now | Bootstrapping tool for building command-line app. |
| [listr](https://github.com/samverschueren/listr) | not available now | Terminal task list. |


### Build tools
|name|star|description|
|----|----|-----------|
| [gulp](http://gulpjs.com) | not available now | Streaming and fast build system that favors code over config. |
| [Broccoli](https://github.com/broccolijs/broccoli) | not available now | A fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions. |
| [browserify](https://github.com/substack/node-browserify) | not available now | Browser-side require() the Node.js way. |
| [webpack](https://github.com/webpack/webpack) | not available now | Packs modules and assets for the browser. |
| [Brunch](https://github.com/brunch/brunch) | not available now | Front-end web app build tool with simple declarative config, fast incremental compilation, and an opinionated workflow. |
| [strong-build](https://github.com/strongloop/strong-build) | not available now | Build a node app package and prepare to deploy it as a package to production or use git to commit to a deploy branch. |
| [grunt](http://gruntjs.com) | not available now | Task runner that can perform repetitive tasks like minification, compilation, unit testing, linting, etc. |
| [start](https://github.com/start-runner/start) | not available now | Simple tasks runner powered by composable functions and promise chaining. |
| [ygor](https://github.com/shannonmoeller/ygor) | not available now | A promising task runner for when <code>npm run</code> isn&apos;t enough and everything else is too much. |
| [Fly](https://github.com/bucaran/fly) | not available now | Modern build system based in co-routines, generators and promises. |


### Hardware
|name|star|description|
|----|----|-----------|
| [johnny-five](https://github.com/rwaldron/johnny-five) | not available now | Firmata based Arduino Framework. |
| [serialport](https://github.com/voodootikigod/node-serialport) | not available now | Access serial ports for reading and writing. |
| [usb](https://github.com/nonolith/node-usb) | not available now | USB library. |
| [cylon.js](http://cylonjs.com) | not available now | Next generation robotics framework with support for 26 different platforms. |
| [i2c-bus](https://github.com/fivdi/i2c-bus) | not available now | I2C serial bus access. |


### Templating
|name|star|description|
|----|----|-----------|
| [marko](https://github.com/marko-js/marko) | not available now | A fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags. |
| [nunjucks](https://github.com/mozilla/nunjucks) | not available now | A powerful templating engine with inheritance, asynchronous control, and more (jinja2 inspired). |
| [handlebars.js](https://github.com/wycats/handlebars.js) | not available now | A superset of Mustache templates which adds powerful features like helpers and more advanced blocks. |
| [hogan.js](http://twitter.github.io/hogan.js/) | not available now | Twitter&apos;s small, fast, phase-separated compiler for Mustache templates. |
| [EJS](https://github.com/mde/ejs) | not available now | Simple unopinionated templating language. |
| [Pug](https://github.com/pugjs/pug) | not available now | High-performance template engine heavily influenced by Haml. |


### Web frameworks
|name|star|description|
|----|----|-----------|
| [Koa](http://koajs.com) | not available now | A new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. |
| [Express](http://expressjs.com) | not available now | A minimal and flexible web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. |
| [Feathers](http://feathersjs.com) | not available now | A minimal and flexible microservice framework built in the spirit of Express. |
| [Hapi](http://hapijs.com) | not available now | A rich framework for building applications and services. |
| [LoopBack](http://loopback.io) | not available now | Powerful framework for creating REST APIs and easily connecting to backend data sources. |
| [Meteor](https://www.meteor.com) | not available now | An ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework. <em>(You might like <a href="https://github.com/Urigo/awesome-meteor">awesome-meteor</a>)</em> |
| [SailsJS](http://sailsjs.org) | not available now | An MVC web framework with a modern twist, supporting WebSockets, streams, and a data-driven API. |
| [Restify](http://restify.com) | not available now | A node framework built specifically to enable you to build correct REST web services. |
| [Interfake](https://github.com/basicallydan/interfake) | not available now | Rapid prototyping framework for making mock HTTP APIs, with a Node.js, command-line and HTTP interface. |
| [Derby](https://github.com/derbyjs/derby) | not available now | MVC framework, making it easy to write realtime, collaborative applications that run in both Node.js and browsers. |
| [Restberry](http://restberry.com) | not available now | Framework for setting up RESTful JSON APIs, applied to your database models without needing to write any code. |
| [Catberry](http://catberry.org) | not available now | Framework with Flux architecture, isomorphic web-components, and progressive rendering. |
| [ThinkJS](https://thinkjs.org) | not available now | Framework with ES2015+ support, WebSockets, REST API. |


### Documentation
|name|star|description|
|----|----|-----------|
| [Docco](http://jashkenas.github.io/docco/) | not available now | A quick-and-dirty documentation generator which produces an HTML document that displays your comments intermingled with your code. |
| [JSDoc](http://usejsdoc.org) | not available now | API documentation generator similar to JavaDoc or PHPDoc. |
| [dox](https://github.com/tj/dox) | not available now | JavaScript documentation generator using Markdown and JSDoc. |
| [jsdox](https://github.com/sutoiku/jsdox) | not available now | JSDoc3 to Markdown documentation generator. |
| [apiDoc](https://github.com/apidoc/apidoc) | not available now | Inline documentation for RESTful web APIs. |
| [documentation.js](http://documentation.js.org) | not available now | API documentation generator with support for ES2015+ and flow annotation. |
| [YUIDoc](http://yui.github.com/yuidoc/) | not available now | Generates API documentation from comments in source. |
| [ESDoc](https://esdoc.org) | not available now | Documentation generator targeting ES2015, attaching test code and measuring documentation coverage. |


### Filesystem
|name|star|description|
|----|----|-----------|
| [del](https://github.com/sindresorhus/del) | not available now | Delete files/folders using globs. |
| [globby](https://github.com/sindresorhus/globby) | not available now | Glob files with support for multiple patterns. |
| [cpy](https://github.com/sindresorhus/cpy) | not available now | Copy files. |
| [rimraf](https://github.com/isaacs/rimraf) | not available now | Recursively delete files like <code>rm -rf</code>. |
| [mkdirp](https://github.com/substack/node-mkdirp) | not available now | Recursively create directories like <code>mkdir -p</code>. |
| [graceful-fs](https://github.com/isaacs/node-graceful-fs) | not available now | Drop-in replacement for the <code>fs</code> module with various improvements. |
| [chokidar](https://github.com/paulmillr/chokidar) | not available now | Filesystem watcher which stabilizes events from <code>fs.watch</code> and <code>fs.watchFile</code> as well as using native <code>fsevents</code> on macOS. |
| [find-up](https://github.com/sindresorhus/find-up) | not available now | Find a file by walking up parent directories. |
| [load-json-file](https://github.com/sindresorhus/load-json-file) | not available now | Read and parse a JSON file. |
| [write-json-file](https://github.com/sindresorhus/write-json-file) | not available now | Stringify and write JSON to a file atomically. |
| [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) | not available now | Like <code>fs.createWriteStream()</code>, but atomic. |
| [filenamify](https://github.com/sindresorhus/filenamify) | not available now | Convert a string to a valid filename. |
| [lnfs](https://github.com/kevva/lnfs) | not available now | Force create symlinks like <code>ln -fs</code>. |
| [istextorbinary](https://github.com/bevry/istextorbinary) | not available now | Check if a file is text or binary. |
| [fs-jetpack](https://github.com/szwacz/fs-jetpack) | not available now | Completely redesigned file system API for convenience in everyday use. |
| [fs-extra](https://github.com/jprichardson/node-fs-extra) | not available now | Extra methods for the <code>fs</code> module. |
| [pkg-dir](https://github.com/sindresorhus/pkg-dir) | not available now | Find the root directory of an npm package. |
| [sander](https://github.com/rich-harris/sander) | not available now | Promise-based replacement for the <code>fs</code> module. |


### Control flow Promises
|name|star|description|
|----|----|-----------|
| [Bluebird](https://github.com/petkaantonov/bluebird) | not available now | A fully featured promise library with focus on innovative features and performance. |
| [pinkie-promise](https://github.com/floatdrop/pinkie-promise) | not available now | Promise ponyfill. |
| [pify](https://github.com/sindresorhus/pify) | not available now | Promisify a callback-style function. |
| [rfpify](https://github.com/samverschueren/rfpify) | not available now | Promisify a result-first callback-style function. |
| [delay](https://github.com/sindresorhus/delay) | not available now | Delay a promise a specified amount of time. |


### Control flow Callbacks
|name|star|description|
|----|----|-----------|
| [each-async](https://github.com/sindresorhus/each-async) | not available now | Async concurrent iterator like forEach. |
| [async](https://github.com/caolan/async) | not available now | Provides straight-forward, powerful functions for working with asynchronicity. |
| [async-chainable](https://github.com/hash-bang/async-chainable) | not available now | Chainable, pluggable async functionality. |
| [after-all-results](https://github.com/watson/after-all-results) | not available now | Bundle results of async functions calls into one callback with all the results. |


### Control flow Generators
|name|star|description|
|----|----|-----------|
| [co](https://github.com/tj/co) | not available now | The ultimate generator based flow-control goodness. |
| [suspend](https://github.com/jmar777/suspend) | not available now | Generator-based control flow that plays nice with callbacks, promises, and thunks. |
| [bluebird-co](https://github.com/novacrazy/bluebird-co) | not available now | A set of high performance yield handlers for Bluebird coroutines. |
| [iterum](https://github.com/xgbuils/iterum) | not available now | Build generator pipelines using Array-like methods. |


### Control flow Streams
|name|star|description|
|----|----|-----------|
| [Highland.js](http://highlandjs.org) | not available now | Manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams. |


### Control flow Channels
|name|star|description|
|----|----|-----------|
| [js-csp](https://github.com/jlongster/js-csp) | not available now | Communicating sequential processes for JavaScript (like Clojurescript core.async, or Go). |


### Control flow Other
|name|star|description|
|----|----|-----------|
| [zone](https://github.com/strongloop/zone) | not available now | Provides a way to group and track resources and errors across asynchronous operations. |


### Streams
|name|star|description|
|----|----|-----------|
| [through2](https://github.com/rvagg/through2) | not available now | Tiny wrapper around streams2 Transform to avoid explicit subclassing noise. |
| [from2](https://github.com/hughsk/from2) | not available now | Convenience wrapper for ReadableStream, inspired by <code>through2</code>. |
| [get-stream](https://github.com/sindresorhus/get-stream) | not available now | Get a stream as a string or buffer. |
| [concat-stream](https://github.com/maxogden/concat-stream) | not available now | Concatenates a stream into strings or binary data. |
| [into-stream](https://github.com/sindresorhus/into-stream) | not available now | Convert a buffer/string/array/object into a stream. |
| [duplexify](https://github.com/mafintosh/duplexify) | not available now | Turn a writeable and readable stream into a single streams2 duplex stream. |
| [pumpify](https://github.com/mafintosh/pumpify) | not available now | Combine an array of streams into a single duplex stream. |
| [peek-stream](https://github.com/mafintosh/peek-stream) | not available now | Transform stream that lets you peek the first line before deciding how to parse it. |
| [binary-split](https://github.com/maxogden/binary-split) | not available now | A fast newline (or any delimiter) splitter stream. |
| [byline](https://github.com/jahewson/node-byline) | not available now | Super-simple line-by-line Stream reader. |
| [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) | not available now | Transform the first chunk in a stream. |
| [pad-stream](https://github.com/sindresorhus/pad-stream) | not available now | Pad each line in a stream. |
| [multistream](https://github.com/feross/multistream) | not available now | Combine multiple streams into a single stream. |
| [stream-combiner2](https://github.com/substack/stream-combiner2) | not available now | Turn a pipeline into a single stream. |
| [readable-stream](https://github.com/nodejs/readable-stream) | not available now | Mirror of Streams2 and Streams3 implementations in core. |
| [through2-concurrent](https://github.com/almost/through2-concurrent) | not available now | Transform object streams concurrently. |
| [graphicsmagick-stream](https://github.com/e-conomic/graphicsmagick-stream) | not available now | Fast conversion/scaling of images using a pool of long lived GraphicsMagick processes. |


### Real-time
|name|star|description|
|----|----|-----------|
| [Socket.io](http://socket.io) | not available now | Enables real-time bidirectional event-based communication. |
| [SockJS](https://github.com/sockjs/sockjs-node) | not available now | Low latency, full duplex, cross-domain channel browser-server, with WebSockets or without. |
| [Faye](http://faye.jcoglan.com) | not available now | Real-time client-server message bus, based on Bayeux protocol. |
| [SocketCluster](https://github.com/SocketCluster/socketcluster) | not available now | Scalable HTTP + WebSocket engine which can run on multiple CPU cores. |
| [Primus](https://github.com/primus/primus) | not available now | An abstraction layer for real-time frameworks to prevent module lock-in. |
| [Straw](https://github.com/simonswain/straw) | not available now | Real-time dataflow framework. |
| [deepstream.io](https://deepstream.io) | not available now | Scalable real-time microservice framework. |
| [Kalm](https://github.com/fed135/Kalm) | not available now | Modular socket wrapper and optimizer. |


### Image
|name|star|description|
|----|----|-----------|
| [sharp](https://github.com/lovell/sharp) | not available now | The fastest module for resizing JPEG, PNG, WebP and TIFF images. |
| [image-type](https://github.com/sindresorhus/image-type) | not available now | Detect the image type of a Buffer/Uint8Array. |
| [gm](https://github.com/aheckmann/gm) | not available now | GraphicsMagick and ImageMagick wrapper. |
| [lwip](https://github.com/EyalAr/lwip) | not available now | Lightweight image processor which does not require ImageMagick. |
| [pica](https://github.com/nodeca/pica) | not available now | High quality &amp; fast resize (lanczos3) in pure JS. Alternative to canvas drawImage(), when no pixelation allowed. |
| [jimp](https://github.com/oliver-moran/jimp) | not available now | Image processing in pure JavaScript. |
| [is-progressive](https://github.com/sindresorhus/is-progressive) | not available now | Check if a JPEG image is progressive. |
| [probe-image-size](https://github.com/nodeca/probe-image-size) | not available now | Get the size of most image formats without a full download. |


### Text
|name|star|description|
|----|----|-----------|
| [Underscore.string](https://github.com/epeli/underscore.string) | not available now | Collection of string manipulation utilities. |
| [iconv-lite](https://github.com/ashtuchkin/iconv-lite) | not available now | Convert character encodings. |
| [repeating](https://github.com/sindresorhus/repeating) | not available now | Repeat a string. |
| [string-length](https://github.com/sindresorhus/string-length) | not available now | Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes. |
| [camelcase](https://github.com/sindresorhus/camelcase) | not available now | Convert a dash/dot/underscore/space separated string to camelCase: foo-bar &#x2192; fooBar. |
| [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) | not available now | Escape RegExp special characters. |
| [execall](https://github.com/sindresorhus/execall) | not available now | Find multiple RegExp matches in a string. |
| [splice-string](https://github.com/sindresorhus/splice-string) | not available now | Remove or replace part of a string like <code>Array#splice</code>. |
| [indent-string](https://github.com/sindresorhus/indent-string) | not available now | Indent each line in a string. |
| [strip-indent](https://github.com/sindresorhus/strip-indent) | not available now | Strip leading whitespace from every line in a string. |
| [detect-indent](https://github.com/sindresorhus/detect-indent) | not available now | Detect the indentation of code. |
| [he](https://github.com/mathiasbynens/he) | not available now | A robust HTML entity encoder/decoder. |
| [i18n-node](https://github.com/mashpie/i18n-node) | not available now | Simple translation module with dynamic JSON storage. |
| [babelfish](https://github.com/nodeca/babelfish) | not available now | i18n with very easy syntax for plurals. |
| [parse-columns](https://github.com/sindresorhus/parse-columns) | not available now | Parse text columns, like the output of Unix commands. |
| [hanging-indent](https://github.com/codekirei/hanging-indent) | not available now | Format a string into a hanging-indented paragraph. |
| [matcher](https://github.com/sindresorhus/matcher) | not available now | Simple wildcard matching. |


### Number
|name|star|description|
|----|----|-----------|
| [random-int](https://github.com/sindresorhus/random-int) | not available now | Generate a random integer. |
| [random-float](https://github.com/sindresorhus/random-float) | not available now | Generate a random float. |
| [unique-random](https://github.com/sindresorhus/unique-random) | not available now | Generate random numbers that are consecutively unique. |
| [round-to](https://github.com/sindresorhus/round-to) | not available now | Round a number to a specific number of decimal places: <code>1.234</code> &#x2192; <code>1.2</code>. |


### Math
|name|star|description|
|----|----|-----------|
| [ndarray](https://github.com/scijs/ndarray) | not available now | Multidimensional arrays. |
| [mathjs](https://github.com/josdejong/mathjs) | not available now | An extensive math library. |
| [math-sum](https://github.com/sindresorhus/math-sum) | not available now | Sum numbers. |
| [math-clamp](https://github.com/sindresorhus/math-clamp) | not available now | Clamp a number. |
| [algebra](https://github.com/fibo/algebra) | not available now | Algebraic structures. |


### Date
|name|star|description|
|----|----|-----------|
| [Moment.js](http://momentjs.com) | not available now | Parse, validate, manipulate, and display dates. |
| [Moment Timezone](http://momentjs.com/timezone/) | not available now | IANA Time Zone Database + Moment.js. |
| [dateformat](https://github.com/felixge/node-dateformat) | not available now | Date formatting. |
| [tz-format](https://github.com/samverschueren/tz-format) | not available now | Format a date with timezone: <code>2015-11-30T10:40:35+01:00</code>. |


### URL
|name|star|description|
|----|----|-----------|
| [normalize-url](https://github.com/sindresorhus/normalize-url) | not available now | Normalize a URL. |
| [humanize-url](https://github.com/sindresorhus/humanize-url) | not available now | Humanize a URL: <a href="http://sindresorhus.com">http://sindresorhus.com</a> &#x2192; sindresorhus.com. |
| [url-unshort](https://github.com/nodeca/url-unshort) | not available now | Expand shortened URLs. |
| [speakingurl](https://github.com/pid/speakingurl) | not available now | Generate a slug from a string with transliteration. |
| [linkify-it](https://github.com/markdown-it/linkify-it) | not available now | Link patterns detector with full unicode support. |
| [url-pattern](https://github.com/snd/url-pattern) | not available now | Easier than regex string matching patterns for URLs and other strings. |
| [embedza](https://github.com/nodeca/embedza) | not available now | Create HTML snippets/embeds from URLs using info from oEmbed, Open Graph, meta tags. |


### Data validation
|name|star|description|
|----|----|-----------|
| [joi](https://github.com/hapijs/joi) | not available now | Object schema description language and validator for JavaScript objects. |
| [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) | not available now | JSON Schema validator that uses code generation to be extremely fast. |
| [property-validator](https://github.com/nettofarah/property-validator) | not available now | Easy property validation for Express. |
| [schema-inspector](https://github.com/Atinux/schema-inspector) | not available now | JSON API sanitization and validation. |


### Parsing
|name|star|description|
|----|----|-----------|
| [remark](https://github.com/wooorm/remark) | not available now | Markdown processor powered by plugins. |
| [markdown-it](https://github.com/markdown-it/markdown-it) | not available now | A very fast markdown parser with 100% CommonMark support, extensions and syntax plugins. |
| [parse5](https://github.com/inikulin/parse5) | not available now | Fast full-featured spec compliant HTML parser. |
| [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) | not available now | Strip comments from JSON. |
| [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) | not available now | Strip comments from CSS. |
| [parse-json](https://github.com/sindresorhus/parse-json) | not available now | Parse JSON with more helpful errors. |
| [URI.js](https://github.com/medialize/URI.js) | not available now | URL mutation. |
| [PostCSS](https://github.com/postcss/postcss) | not available now | CSS parser / stringifier. |
| [JSONStream](https://github.com/dominictarr/JSONStream) | not available now | Streaming JSON.parse and stringify. |
| [csv-parser](https://github.com/mafintosh/csv-parser) | not available now | Streaming CSV parser that aims to be faster than everyone else. |
| [neat-csv](https://github.com/sindresorhus/neat-csv) | not available now | Fast CSV parser. Callback interface for the above. |
| [PEG.js](https://github.com/pegjs/pegjs) | not available now | Simple parser generator that produces fast parsers with excellent error reporting. |
| [x-ray](https://github.com/lapwinglabs/x-ray) | not available now | A web scraping utility to see through the <code>&lt;html&gt;</code> noise. |
| [nearley](https://github.com/Hardmath123/nearley) | not available now | Simple, fast, powerful parsing for JavaScript. |
| [binary-extract](https://github.com/juliangruber/binary-extract) | not available now | Extract a value from a buffer of JSON without parsing the whole thing. |
| [json-mask](https://github.com/nemtsov/json-mask) | not available now | Tiny language and engine for selecting parts of an object, hiding/masking the rest. |
| [Stylecow](https://github.com/stylecow/stylecow) | not available now | Parse, manipulate and convert modern CSS to make it compatible with all browsers. Extensible with plugins. |
| [js-yaml](https://github.com/nodeca/js-yaml) | not available now | Very fast YAML parser. |
| [excel-stream](https://github.com/dominictarr/excel-stream) | not available now | Streaming Excel spreadsheet to JSON parser. |
| [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) | not available now | XML to JavaScript object converter. |
| [Jison](http://zaach.github.io/jison/) | not available now | Friendly JavaScript parser generator. It shares genes with Bison, Yacc and family. |
| [google-libphonenumber](https://github.com/seegno/google-libphonenumber) | not available now | Parse, format, store and validate phone numbers. |


### Humanize
|name|star|description|
|----|----|-----------|
| [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) | not available now | Convert bytes to a human readable string: <code>1337</code> &#x2192; <code>1.34 kB</code>. |
| [pretty-ms](https://github.com/sindresorhus/pretty-ms) | not available now | Convert milliseconds to a human readable string: <code>1337000000</code> &#x2192; <code>15d 11h 23m 20s</code>. |
| [ms](https://github.com/rauchg/ms.js) | not available now | Tiny millisecond conversion utility. |
| [pretty-error](https://github.com/AriaMinaei/pretty-error) | not available now | Errors with less clutter. |
| [humanize](https://github.com/taijinlee/humanize) | not available now | Data formatter for human readability. |
| [read-art](https://github.com/Tjatse/node-readability) | not available now | Extract readable content from any page. |


### Compression
|name|star|description|
|----|----|-----------|
| [Archiver](https://github.com/archiverjs/node-archiver) | not available now | Streaming interface for archive generation, supporting ZIP and TAR. |
| [decompress-zip](https://github.com/bower/decompress-zip) | not available now | Unzip. |
| [pako](https://github.com/nodeca/pako) | not available now | High speed zlib port to pure js (deflate, inflate, gzip). |
| [tar-stream](https://github.com/mafintosh/tar-stream) | not available now | Streaming tar parser and generator. Also see <a href="https://github.com/mafintosh/tar-fs">tar-fs</a>. |
| [decompress](https://github.com/kevva/decompress) | not available now | A pluggable decompression module with support for <code>tar</code>, <code>tar.gz</code> and <code>zip</code> files out of the box. |


### Network
|name|star|description|
|----|----|-----------|
| [get-port](https://github.com/sindresorhus/get-port) | not available now | Get an available port. |
| [ipify](https://github.com/sindresorhus/ipify) | not available now | Get your public IP address. |
| [getmac](https://github.com/bevry/getmac) | not available now | Get the computer MAC address. |
| [polo](https://github.com/mafintosh/polo) | not available now | Zero-config service discovery. |


### Database Drivers
|name|star|description|
|----|----|-----------|
| [LevelUP](https://github.com/Level/levelup) | not available now | LevelDB. |
| [MongoDB](https://github.com/mongodb/node-mongodb-native) | not available now | MongoDB driver. |
| [PostgreSQL](https://github.com/brianc/node-postgres) | not available now | PostgreSQL client. Pure JavaScript and native libpq bindings. |
| [MySQL](https://github.com/felixge/node-mysql) | not available now | MySQL client. |
| [Redis](https://github.com/luin/ioredis) | not available now | Redis client. |
| [nano](https://github.com/dscape/nano) | not available now | CouchDB client. |
| [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) | not available now | Aerospike client. |


### Database ODM / ORM
|name|star|description|
|----|----|-----------|
| [Bookshelf](http://bookshelfjs.org) | not available now | ORM for PostgreSQL, MySQL and SQLite3 in the style of Backbone.js. |
| [Massive](https://github.com/robconery/massive-js) | not available now | PostgreSQL data access tool. |
| [Mongoose](http://mongoosejs.com) | not available now | Elegant MongoDB object modeling. |
| [Sequelize](https://github.com/sequelize/sequelize) | not available now | Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL. |
| [Waterline](https://github.com/balderdashy/waterline) | not available now | Datastore-agnostic tool that dramatically simplifies interaction with one or more databases. |
| [Iridium](https://github.com/SierraSoftworks/Iridium) | not available now | A high performance MongoDB ORM with support for promises, distributed caching, preprocessing, validation and plugins. |
| [OpenRecord](https://github.com/PhilWaldmann/openrecord) | not available now | ORM for PostgreSQL, MySQL, SQLite3 and RESTful datastores. Similar to ActiveRecord. |
| [orm2](https://github.com/dresende/node-orm2) | not available now | ORM for PostgreSQL, MariaDB, MySQL, Amazon Redshift, SQLite, MongoDB. |
| [firenze](https://github.com/fahad19/firenze) | not available now | Adapter-based ORM for MySQL, Memory, Redis, localStorage and more. |
| [pg-promise](https://github.com/vitaly-t/pg-promise) | not available now | PostgreSQL framework for native SQL using promises. |
| [Objection.js](https://github.com/Vincit/objection.js) | not available now | Lightweight ORM built on the SQL query builder Knex. |


### Database Query builder
|name|star|description|
|----|----|-----------|
| [Knex](http://knexjs.org) | not available now | A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use. |


### Database Other
|name|star|description|
|----|----|-----------|
| [NeDB](https://github.com/louischatriot/nedb) | not available now | Embedded persistent database written in JavaScript. |


### Testing
|name|star|description|
|----|----|-----------|
| [AVA](https://ava.li) | not available now | Futuristic test runner. |
| [tap](https://github.com/isaacs/node-tap) | not available now | A TAP test framework. |
| [tape](https://github.com/substack/tape) | not available now | TAP-producing test harness. |
| [Mocha](http://mochajs.org) | not available now | A feature-rich test framework making asynchronous testing simple and fun. |
| [power-assert](https://github.com/power-assert-js/power-assert) | not available now | Provides descriptive assertion messages through the standard assert interface. |
| [Mochify](https://github.com/mantoni/mochify.js) | not available now | TDD with Browserify, Mocha, PhantomJS and WebDriver. |
| [trevor](https://github.com/vdemedes/trevor) | not available now | Run tests against multiple versions of Node.js without switching versions manually or pushing to Travis CI. |
| [loadtest](https://github.com/alexfernandez/loadtest) | not available now | Run load tests for your web application, with an API for automation. |
| [istanbul](https://github.com/gotwarlost/istanbul) | not available now | A code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. |
| [nyc](https://github.com/bcoe/nyc) | not available now | Code coverage tool built on istanbul that works with subprocesses. |
| [Sinon.JS](https://github.com/sinonjs/sinon) | not available now | Test spies, stubs and mocks. |
| [navit](https://github.com/nodeca/navit) | not available now | PhantomJS / SlimerJS wrapper to simplify browser test scripting. |
| [nock](https://github.com/pgte/nock) | not available now | HTTP mocking and expectations. |
| [intern](https://github.com/theintern/intern) | not available now | A next-generation code testing stack for JavaScript. |
| [toxy](https://github.com/h2non/toxy) | not available now | Hackable HTTP proxy to simulate failure scenarios and network conditions. |
| [hook-std](https://github.com/sindresorhus/hook-std) | not available now | Hook and modify stdout/stderr. |
| [testen](https://github.com/egoist/testen) | not available now | Run tests for multiple versions of Node.js locally with NVM. |
| [Nightwatch](https://github.com/nightwatchjs/nightwatch) | not available now | Automated UI testing framework based on Selenium WebDriver. |
| [WebdriverIO](http://webdriver.io) | not available now | Automated testing based on the WebDriver protocol. |


### Security
|name|star|description|
|----|----|-----------|
| [snyk](https://github.com/Snyk/snyk) | not available now | CLI and build-time tool to find &amp; fix vulnerable npm dependencies. |
| [nsp](https://github.com/nodesecurity/nsp) | not available now | CLI tool to identify known vulnerabilities in your project. |
| [RegEx-DoS](https://github.com/jagracey/RegEx-DoS) | not available now | CLI tool to identify possible regex denial of service (ReDos) vulnerabilities in your project. |


### Benchmarking
|name|star|description|
|----|----|-----------|
| [Benchmark.js](http://benchmarkjs.com) | not available now | A robust benchmarking library that works on nearly all JavaScript platforms, supports high-resolution timers, and returns statistically significant results. |
| [matcha](https://github.com/logicalparadox/matcha) | not available now | A caffeine-driven, simplistic approach to benchmarking. |


### Minifiers
|name|star|description|
|----|----|-----------|
| [UglifyJS2](http://lisperator.net/uglifyjs/) | not available now | JavaScript minifier. |
| [clean-css](https://github.com/jakubpawlowicz/clean-css) | not available now | CSS minifier. |
| [minimize](https://github.com/Swaagie/minimize) | not available now | HTML minifier. |
| [imagemin](https://github.com/imagemin/imagemin) | not available now | Image minifier. |


### Authentication
|name|star|description|
|----|----|-----------|
| [Passport](http://passportjs.org) | not available now | Simple, unobtrusive authentication. |
| [everyauth](https://github.com/bnoguchi/everyauth) | not available now | Authentication and authorization (password, Facebook, etc) for your Connect and Express apps. |
| [passwordless](https://passwordless.net) | not available now | Token-based authentication middleware for Express allowing authentication without passwords. |
| [Lockit](https://github.com/zemirco/lockit) | not available now | Full featured authentication solution for Express. Supports a variety of databases, predefined routes, email and two-factor authentication. |
| [Grant](https://github.com/simov/grant) | not available now | OAuth middleware for Express, Koa, and Hapi. |


### Email
|name|star|description|
|----|----|-----------|
| [Nodemailer](https://github.com/andris9/Nodemailer) | not available now | The fastest way to handle email. |
| [emailjs](https://github.com/eleith/emailjs) | not available now | Send text/HTML emails with attachments to any SMTP server. |


### Job queues
|name|star|description|
|----|----|-----------|
| [kue](https://github.com/Automattic/kue) | not available now | Priority job queue backed by Redis. |
| [bull](https://github.com/OptimalBits/bull) | not available now | Persistent job and message queue. |


### Node.js management
|name|star|description|
|----|----|-----------|
| [n](https://github.com/tj/n) | not available now | Node.js version management. |
| [nave](https://github.com/isaacs/nave) | not available now | Virtual Environments for Node.js. |
| [nodeenv](https://github.com/ekalinin/nodeenv) | not available now | A Node.js virtual environment compatible to Python&apos;s virtualenv. |
| [nvm for Windows](https://github.com/coreybutler/nvm-windows) | not available now | Version management for Windows. |


### Polyfills Node.js
|name|star|description|
|----|----|-----------|
| [set-immediate-shim](https://github.com/sindresorhus/set-immediate-shim) | not available now | Simple <code>setImmediate()</code> ponyfill. |
| [path-is-absolute](https://github.com/sindresorhus/path-is-absolute) | not available now | Node.js 0.12 <code>path.isAbsolute()</code> ponyfill. |
| [os-tmpdir](https://github.com/sindresorhus/os-tmpdir) | not available now | Node.js <code>os.tmpdir()</code> ponyfill. |
| [os-homedir](https://github.com/sindresorhus/os-homedir) | not available now | Node.js 4 <code>os.homedir()</code> ponyfill. |
| [user-info](https://github.com/sindresorhus/user-info) | not available now | Node.js 6 <code>os.userInfo()</code> ponyfill. |
| [debug-log](https://github.com/sindresorhus/debug-log) | not available now | Node.js 0.12 <code>util.debuglog()</code> ponyfill. |
| [buffer-equals](https://github.com/sindresorhus/buffer-equals) | not available now | Node.js 0.12 <code>buffer.equals()</code> ponyfill. |
| [buffer-includes](https://github.com/sindresorhus/buffer-includes) | not available now | Node.js 5.3 <code>buffer.includes()</code> ponyfill. |
| [buf-indexof](https://github.com/sindresorhus/buf-indexof) | not available now | Node.js 4 <code>buffer.indexOf()</code> ponyfill. |
| [buf-compare](https://github.com/sindresorhus/buf-compare) | not available now | Node.js 0.12 <code>Buffer.compare()</code> ponyfill. |
| [fs-access](https://github.com/sindresorhus/fs-access) | not available now | Node.js 0.12 <code>fs.access()</code> &amp; <code>fs.accessSync()</code> ponyfill. |
| [exec-file-sync](https://github.com/sindresorhus/exec-file-sync) | not available now | Node.js 0.12 <code>childProcess.execFileSync()</code> ponyfill. |
| [child-process-ctor](https://github.com/sindresorhus/child-process-ctor) | not available now | Node.js 4 <code>childProcess.ChildProcess</code> ponyfill. |
| [node-status-codes](https://github.com/sindresorhus/node-status-codes) | not available now | Node.js <code>http.STATUS_CODES</code> ponyfill. |
| [exit-code](https://github.com/isaacs/exit-code) | not available now | Node.js 0.12 <code>process.exitCode</code> polyfill. |
| [core-assert](https://github.com/sindresorhus/core-assert) | not available now | Node.js <code>assert</code> as a standalone module. |
| [deep-strict-equal](https://github.com/sindresorhus/deep-strict-equal) | not available now | Test for deep equality - Node.js <code>assert.deepStrictEqual()</code> algorithm as a standalone module. |


### Polyfills JavaScript
|name|star|description|
|----|----|-----------|
| [object-assign](https://github.com/sindresorhus/object-assign) | not available now | ES2015 <code>Object.assign()</code> ponyfill. |
| [pinkie-promise](https://github.com/floatdrop/pinkie-promise) | not available now | ES2015 <code>Promise</code> ponyfill. |
| [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) | not available now | ES2015 <code>Reflect</code> and <code>Proxy</code> polyfill. |
| [es6-shim](https://github.com/paulmillr/es6-shim) | not available now | Collection of ES2015 polyfills. |
| [es6-tools](https://github.com/addyosmani/es6-tools#polyfills) | not available now | More ES2015 polyfills at . |


### Natural language processing
|name|star|description|
|----|----|-----------|
| [retext](https://github.com/wooorm/retext) | not available now | An extensible natural language system. |
| [franc](https://github.com/wooorm/franc) | not available now | Detect the language of text. |
| [leven](https://github.com/sindresorhus/leven) | not available now | Measure the difference between two strings using the Levenshtein distance algorithm. |
| [natural](https://github.com/NaturalNode/natural) | not available now | A general natural language facility. |


### Process management
|name|star|description|
|----|----|-----------|
| [PM2](https://github.com/Unitech/pm2) | not available now | Advanced Process Manager. |
| [node-windows](https://github.com/coreybutler/node-windows) | not available now | Run scripts as a native Windows service and log to the Event viewer. |
| [node-mac](https://github.com/coreybutler/node-mac) | not available now | Run scripts as a native Mac daemon and log to the console app. |
| [node-linux](https://github.com/coreybutler/node-linux) | not available now | Run scripts as native system service and log to syslog. |
| [forever](https://github.com/foreverjs/forever) | not available now | A simple CLI tool for ensuring that a given script runs continuously (i.e. forever). |
| [nodemon](https://github.com/remy/nodemon) | not available now | Monitor for changes in your app and automatically restart the server. |
| [supervisor](https://github.com/petruisfan/node-supervisor) | not available now | Restart scripts when they crash or restart when a <code>*.js</code> file changes. |
| [Phusion Passenger](https://www.phusionpassenger.com/node_weekly) | not available now | Friendly process manager that integrates directly into Nginx. |
| [naught](https://github.com/andrewrk/naught) | not available now | Process manager with zero downtime deployment. |


### Automation
|name|star|description|
|----|----|-----------|
| [robotjs](https://github.com/octalmage/robotjs) | not available now | Desktop Automation: control the mouse, keyboard and read the screen. |


### AST
|name|star|description|
|----|----|-----------|
| [Acorn](https://github.com/ternjs/acorn) | not available now | A tiny, fast JavaScript parser. |
| [Rocambole](https://github.com/millermedeiros/rocambole) | not available now | Recursively walk and transform JavaScript AST. |


### Static site generators
|name|star|description|
|----|----|-----------|
| [Metalsmith](http://www.metalsmith.io) | not available now | An extremely simple, pluggable static site generator. |
| [Wintersmith](http://wintersmith.io) | not available now | Flexible, minimalistic, multi-platform static site generator. |
| [Assemble](http://assemble.io) | not available now | Static site generator for Node.js, Grunt.js, and Yeoman. |
| [DocPad](https://github.com/docpad/docpad) | not available now | Static site generator with dynamic abilities and huge plugin ecosystem. |


### Content management systems
|name|star|description|
|----|----|-----------|
| [KeystoneJS](http://keystonejs.com) | not available now | CMS and web application platform built on Express and MongoDB. |
| [Calipso](http://calip.so) | not available now | A simple content management system, built along similar themes to Drupal and Wordpress, that is designed to be fast, flexible and simple. |
| [Apostrophe2](http://apostrophenow.org) | not available now | A content management system with an emphasis on intuitive front end content editing and administration built on Express and MongoDB. |


### Forum
|name|star|description|
|----|----|-----------|
| [nodeBB](https://nodebb.org) | not available now | A better forum platform for the modern web. |


### Blogging
|name|star|description|
|----|----|-----------|
| [ghost](https://ghost.org) | not available now | Simple, powerful publishing platform that allows you to share your story with the world. |
| [Hexo](https://hexo.io) | not available now | Fast, simple and powerful blogging framework. |


### Weird
|name|star|description|
|----|----|-----------|
| [superb](https://github.com/sindresorhus/superb) | not available now | Get superb like words. |
| [cat-names](https://github.com/sindresorhus/cat-names) | not available now | Get popular cat names. |
| [dog-names](https://github.com/sindresorhus/dog-names) | not available now | Get popular dog names. |
| [superheroes](https://github.com/sindresorhus/superheroes) | not available now | Get superhero names. |
| [supervillains](https://github.com/sindresorhus/supervillains) | not available now | Get supervillain names. |
| [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) | not available now | Get some cool ascii faces. |
| [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) | not available now | &#x208D;&#x2C4;&#xB7;&#x348;&#xF1D;&#xB7;&#x348;&#x2C4;&#x208E;&#x25DE; &#x311;&#x311;&#xDC6;&#x20DB; (=&#x2180;&#x3C9;&#x2180;=)&#x2727; (^&#xFF65;o&#xFF65;^)&#xFF89;&#x201D; |
| [cows](https://github.com/sindresorhus/cows) | not available now | ASCII cows. |


### Miscellaneous
|name|star|description|
|----|----|-----------|
| [execa](https://github.com/sindresorhus/execa) | not available now | A better <code>child_process</code>. |
| [cheerio](https://github.com/cheeriojs/cheerio) | not available now | Fast, flexible, and lean implementation of core jQuery designed specifically for the server. |
| [Electron](https://github.com/atom/electron) | not available now | Build cross platform desktop apps with web technologies. <em>(You might like <a href="https://github.com/sindresorhus/awesome-electron">awesome-electron</a>)</em> |
| [opn](https://github.com/sindresorhus/opn) | not available now | Opens stuff like websites, files, executables. |
| [hasha](https://github.com/sindresorhus/hasha) | not available now | Hashing made simple. Get the hash of a buffer/string/stream/file. |
| [dot-prop](https://github.com/sindresorhus/dot-prop) | not available now | Get a property from a nested object using a dot path. |
| [onetime](https://github.com/sindresorhus/onetime) | not available now | Only run a function once. |
| [mem](https://github.com/sindresorhus/mem) | not available now | Memoize functions - an optimization technique used to speed up consecutive function calls by caching the result of calls with identical input. |
| [require-uncached](https://github.com/sindresorhus/require-uncached) | not available now | Require a module bypassing the cache. |
| [stringify-object](https://github.com/yeoman/stringify-object) | not available now | Stringify an object/array like JSON.stringify just without all the double-quotes. |
| [strip-bom](https://github.com/sindresorhus/strip-bom) | not available now | Strip UTF-8 byte order mark (BOM) from a string/buffer/stream. |
| [deep-assign](https://github.com/sindresorhus/deep-assign) | not available now | Recursive <code>Object.assign()</code>. |
| [os-locale](https://github.com/sindresorhus/os-locale) | not available now | Get the system locale. |
| [nan](https://github.com/nodejs/nan) | not available now | A header file filled with macro and utility goodness for making add-on development for across Node.js versions easier. |
| [multiline](https://github.com/sindresorhus/multiline) | not available now | Multiline strings in JavaScript. |
| [ssh2](https://github.com/mscdex/ssh2) | not available now | An SSH2 client and server module. |
| [adit](https://github.com/markelog/adit) | not available now | SSH tunneling made simple. |
| [lazy-req](https://github.com/sindresorhus/lazy-req) | not available now | Require modules lazily. |
| [file-type](https://github.com/sindresorhus/file-type) | not available now | Detect the file type of a Buffer. |
| [Bottleneck](https://github.com/SGrondin/bottleneck) | not available now | A powerful rate limiter that makes throttling easy. |
| [webworker-threads](https://github.com/audreyt/node-webworker-threads) | not available now | Lightweight Web Worker API implementation with native threads. |
| [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) | not available now | Makes it easy to publish and install Node.js C++ addons from binaries. |
| [opencv](https://github.com/peterbraden/node-opencv) | not available now | Bindings for OpenCV. The defacto computer vision library. |
| [common-errors](https://github.com/shutterstock/node-common-errors) | not available now | Common error classes and utility functions. |
| [agenda](https://github.com/rschmukler/agenda) | not available now | Lightweight job scheduling on MongoDB. |
| [dotenv](https://github.com/motdotla/dotenv) | not available now | Load environment variables from .env file. |
| [remote-git-tags](https://github.com/sindresorhus/remote-git-tags) | not available now | Get tags from a remote git repo. |
| [semver](https://github.com/npm/node-semver) | not available now | <a href="http://semver.org">semver</a> parser. |
| [nar](https://github.com/h2non/nar) | not available now | Create self-contained executable binaries. |
| [banshee](https://github.com/eleme/banshee) | not available now | Real-time anomalies detection for periodic time series. |
| [Faker.js](https://github.com/Marak/Faker.js) | not available now | Generate massive amounts of fake data. |
| [nodegit](https://github.com/nodegit/nodegit) | not available now | Native bindings to Git. |
| [json-strictify](https://github.com/pigulla/json-strictify) | not available now | Safely serialize a value to JSON without data loss or going into an infinite loop. |
| [parent-module](https://github.com/sindresorhus/parent-module) | not available now | Get the path of the parent module. |
| [resolve-from](https://github.com/sindresorhus/resolve-from) | not available now | Resolve the path of a module like <code>require.resolve()</code> but from a given path. |
| [simplecrawler](https://github.com/cgiffard/node-simplecrawler) | not available now | Event driven web crawler. |
| [jsdom](https://github.com/tmpvar/jsdom) | not available now | JavaScript implementation of HTML and the DOM. |
| [hypernova](https://github.com/airbnb/hypernova) | not available now | A service for server-side rendering your JavaScript views. |


### Tutorials
|name|star|description|
|----|----|-----------|
| [Nodeschool](http://nodeschool.io) | not available now | Learn Node.js with interactive lessons. |
| [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) | not available now | An introduction to Node.js. |
| [stream-handbook](https://github.com/substack/stream-handbook) | not available now | How to write Node.js programs with streams. |
| [browserify-handbook](https://github.com/substack/browserify-handbook) | not available now | The definitive guide for browserify. |
| [module-best-practices](https://github.com/mattdesl/module-best-practices) | not available now | Some good practices when writing new npm modules. |
| [The Node Way](http://thenodeway.io) | not available now | &#x2014; An entire philosophy of Node.js best practices and guiding principles exists for writing maintainable modules, scalable applications, and code that is actually pleasant to read. |
| [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) | not available now | Introduction to Node.js core features and asynchronous JavaScript. |


### Discovery
|name|star|description|
|----|----|-----------|
| [npms](https://npms.io) | not available now | Superb package search with deep analysis of package quality using a <a href="https://npms.io/about">myriad of metrics</a>. |
| [node-modules.com](http://node-modules.com) | not available now | An alternative npm search engine with a more intelligent and personal results ranking. |
| [npm addict](https://npmaddict.com) | not available now | Your daily injection of npm packages. |
| [npmcompare.com](https://npmcompare.com) | not available now | Compare and discover npm packages. |


### Articles
|name|star|description|
|----|----|-----------|
| [Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors) | not available now |  |
| [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps) | not available now |  |
| [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801) | not available now |  |
| [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/) | not available now |  |
| [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/) | not available now |  |
| [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/) | not available now |  |
| [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/) | not available now |  |
| [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/) | not available now |  |


### Newsletters
|name|star|description|
|----|----|-----------|
| [node weekly](http://nodeweekly.com) | not available now | Weekly e-mail round-up of Node.js news and articles. |
| [nmotw](http://nmotw.in) | not available now | Node Module Of The Week, weekly dose of hand picked node modules. |


### Videos
|name|star|description|
|----|----|-----------|
| [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I) | not available now |  |
| [LearnAllTheNodes](https://www.learnallthenodes.com) | not available now | Series of useful tips, tricks, and packages. |
| [Introduction to Node.js Fundamentals](http://strongloop.com/node-js/videos/#a-video-intro-to-nodejs-fundamentals) | not available now |  |
| [Hands on with Node.js](https://learn.bevry.me/node/preface) | not available now |  |
| [Full Streams Ahead](http://dry.ly/full-streams-ahead) | not available now | Introduction to streams. |
| [StrongLoop Talks](https://strongloop.com/node-js/videos/) | not available now | Series of talks. |
| [thenewboston's Node.js for Beginners](https://www.thenewboston.com/videos.php?cat=355) | not available now |  |
| [Nodetuts](http://nodetuts.com) | not available now | Series of talks, including TCP &amp; HTTP API servers, async programming, and more. |
| [Node Interactive 2015](https://github.com/duffn/nodeinteractive-2015) | not available now | List of talks, keynotes and panels from the 2015 Node Interactive conference. |


### Podcasts
|name|star|description|
|----|----|-----------|
| [NodeUp](http://nodeup.com) | not available now |  |
| [Mostly Node](http://mostlynode.com) | not available now |  |


### Books
|name|star|description|
|----|----|-----------|
| [Node.js in Action](http://www.amazon.com/Node-js-Action-Mike-Cantelon/dp/1617290572) | not available now |  |
| [Node.js in Practice](http://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939) | not available now |  |
| [Mastering Node](http://visionmedia.github.io/masteringnode/) | not available now |  |
| [Professional Node.js: Building Javascript Based Scalable Software](http://www.amazon.com/Professional-Node-js-Building-Javascript-Scalable-ebook/dp/B009L7QETY/) | not available now |  |
| [Practical Node.js: Building Real-World Scalable Web Apps](http://practicalnodebook.com) | not available now |  |
| [Mixu's Node book](http://book.mixu.net/node/) | not available now |  |
| [Web Development with Node and Express](http://shop.oreilly.com/product/0636920032977.do) | not available now |  |
| [Pro Express.js](http://proexpressjs.com) | not available now |  |
| [Secure Your Node.js Web Application](http://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856) | not available now |  |


### Blogs
|name|star|description|
|----|----|-----------|
| [Node.js blog](https://nodejs.org/en/blog/) | not available now |  |
| [HowToNode](http://howtonode.org) | not available now | Teaching how to do various tasks in Node.js as well as teach fundamental concepts that are needed to write effective code. |
| [webapplog.com](http://webapplog.com/tag/node-js/) | not available now | &#x2014; Blog posts on Node.js and JavaScript from the author of Practical Node.js and Pro Express.js Azat Mardan. |


### Courses
|name|star|description|
|----|----|-----------|
| [Real Time Web with Node.js](http://campus.codeschool.com/auth/codeschool) | not available now |  |
| [Learn and Understand Node.js](https://www.udemy.com/understand-nodejs) | not available now |  |


### Cheatsheets
|name|star|description|
|----|----|-----------|
| [Express.js](https://github.com/azat-co/cheatsheets/blob/master/express4) | not available now |  |
| [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) | not available now | Answering common questions about streams, covering pagination, events, and more. |


### Tools
|name|star|description|
|----|----|-----------|
| [GitHub Linker](https://chrome.google.com/webstore/detail/github-linker/jlmafbaeoofdegohdhinkhilhclaklkp) | not available now | Chrome extension that linkifies dependencies in package.json, .js, .jsx, .coffee and .md files on GitHub. |
| [npm-hub](https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj) | not available now | Chrome extension to display npm dependencies at the bottom of a repo&apos;s readme. |
| [RequireBin](http://requirebin.com) | not available now | Shareable JavaScript programs powered by npm and browserify. |
| [Tonic](http://blog.tonicdev.com/2015/09/30/embedded-tonic.html) | not available now | Embed a Node.js environment on any website. |


### Community
|name|star|description|
|----|----|-----------|
| [#node.js on Freenode](http://webchat.freenode.net/?channels=node.js) | not available now |  |
| [Stack Overflow](http://stackoverflow.com/questions/tagged/node.js) | not available now |  |
| [Reddit](https://www.reddit.com/r/node) | not available now |  |
| [Twitter](https://twitter.com/nodejs) | not available now |  |


### Miscellaneous
|name|star|description|
|----|----|-----------|
| [nodebots](http://nodebots.io) | not available now | Robots powered by JavaScript. |
| [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) | not available now | Boilerplate to kickstart creating a node module. |
| [generator-nm](https://github.com/sindresorhus/generator-nm) | not available now | Scaffold out a node module. |
| [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) | not available now | Resources for writing and testing cross-platform code. |


