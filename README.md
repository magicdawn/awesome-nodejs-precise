
# awesome-nodejs-precise
> list taken from [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs/), with star shown

## TOC

- [Mad science](#mad-science)
- [Command-line apps](#command-line-apps)
- [Functional programming](#functional-programming)
- [HTTP](#http)
- [Debugging / Profiling](#debugging-profiling)
- [Logging](#logging)
- [Command-line utilities](#command-line-utilities)
- [Build tools](#build-tools)
- [Hardware](#hardware)
- [Templating](#templating)
- [Web frameworks](#web-frameworks)
- [Documentation](#documentation)
- [Filesystem](#filesystem)
- [Control flow Promises](#control-flow-promises)
- [Control flow Callbacks](#control-flow-callbacks)
- [Control flow Generators](#control-flow-generators)
- [Control flow Streams](#control-flow-streams)
- [Control flow Channels](#control-flow-channels)
- [Control flow Other](#control-flow-other)
- [Streams](#streams)
- [Real-time](#real-time)
- [Image](#image)
- [Text](#text)
- [Number](#number)
- [Math](#math)
- [Date](#date)
- [URL](#url)
- [Data validation](#data-validation)
- [Parsing](#parsing)
- [Humanize](#humanize)
- [Compression](#compression)
- [Network](#network)
- [Database Drivers](#database-drivers)
- [Database ODM / ORM](#database-odm-orm)
- [Database Query builder](#database-query-builder)
- [Database Other](#database-other)
- [Testing](#testing)
- [Security](#security)
- [Benchmarking](#benchmarking)
- [Minifiers](#minifiers)
- [Authentication](#authentication)
- [Email](#email)
- [Job queues](#job-queues)
- [Node.js management](#node-js-management)
- [Polyfills Node.js](#polyfills-node-js)
- [Polyfills JavaScript](#polyfills-java-script)
- [Natural language processing](#natural-language-processing)
- [Process management](#process-management)
- [Automation](#automation)
- [AST](#ast)
- [Static site generators](#static-site-generators)
- [Content management systems](#content-management-systems)
- [Forum](#forum)
- [Blogging](#blogging)
- [Weird](#weird)
- [Miscellaneous](#miscellaneous)
- [Tutorials](#tutorials)
- [Discovery](#discovery)
- [Articles](#articles)
- [Newsletters](#newsletters)
- [Videos](#videos)
- [Podcasts](#podcasts)
- [Books](#books)
- [Blogs](#blogs)
- [Courses](#courses)
- [Cheatsheets](#cheatsheets)
- [Tools](#tools)
- [Community](#community)
- [Miscellaneous](#miscellaneous)

## Packages

### Mad science
|name|star|description|
|----|----|-----------|
| [webtorrent](https://github.com/feross/webtorrent) | [![GitHub stars](https://img.shields.io/github/stars/feross/webtorrent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming torrent client for Node.js and the browser. |
| [GitTorrent](https://github.com/cjb/GitTorrent) | [![GitHub stars](https://img.shields.io/github/stars/cjb/GitTorrent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Peer-to-peer network of Git repositories being shared over BitTorrent. |
| [peerflix](https://github.com/mafintosh/peerflix) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/peerflix            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming torrent client. |
| [dat](http://dat-data.com) | not available now | Real-time replication and versioning for data sets. |
| [ipfs](https://github.com/ipfs/js-ipfs) | [![GitHub stars](https://img.shields.io/github/stars/ipfs/js-ipfs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Distributed file system that seeks to connect all computing devices with the same system of files. |
| [stackgl](http://stack.gl) | not available now | Open software ecosystem for WebGL, built on top of browserify and npm. |
| [peerwiki](https://github.com/mafintosh/peerwiki) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/peerwiki            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | All of Wikipedia on BitTorrent. |
| [peercast](https://github.com/mafintosh/peercast) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/peercast            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Stream a torrent video to Chromecast. |
| [BitcoinJS](http://bitcoinjs.org) | not available now | Clean, readable, proven Bitcoin library. |
| [Bitcore](https://bitcore.io) | not available now | A pure and powerful Bitcoin library. |
| [PDFKit](http://pdfkit.org) | not available now | PDF generation library. |
| [turf](https://github.com/Turfjs/turf) | [![GitHub stars](https://img.shields.io/github/stars/Turfjs/turf            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Modular geospatial processing and analysis engine. |
| [webcat](https://github.com/mafintosh/webcat) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/webcat            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | p2p pipe across the web using WebRTC that uses your GitHub private/public key for authentication. |
| [js-git](https://github.com/creationix/js-git) | [![GitHub stars](https://img.shields.io/github/stars/creationix/js-git            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JavaScript implementation of Git. |
| [NodeOS](http://node-os.com) | not available now | The first operating system powered by npm. |
| [limdu](https://github.com/erelsgl/limdu) | [![GitHub stars](https://img.shields.io/github/stars/erelsgl/limdu            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Machine-learning framework. |
| [Cytoscape.js](http://js.cytoscape.org) | not available now | Graph theory (a.k.a. network) modeling and analysis. |
| [kad](https://github.com/kadtools/kad) | [![GitHub stars](https://img.shields.io/github/stars/kadtools/kad            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Kademlia distributed hash table. |


### Command-line apps
|name|star|description|
|----|----|-----------|
| [pageres](https://github.com/sindresorhus/pageres) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pageres            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Capture website screenshots. |
| [trash](https://github.com/sindresorhus/trash) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/trash            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A safer alternative to <code>rm</code>. |
| [npm-name](https://github.com/sindresorhus/npm-name) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/npm-name            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check whether a package name is available on npm. |
| [XO](https://github.com/sindresorhus/xo) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/xo            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Enforce strict code style using the JavaScript happiness style. |
| [speed-test](https://github.com/sindresorhus/speed-test) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/speed-test            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Test your internet connection speed and ping. |
| [np](https://github.com/sindresorhus/np) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/np            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A better <code>npm publish</code>. |
| [yo](https://github.com/yeoman/yo) | [![GitHub stars](https://img.shields.io/github/stars/yeoman/yo            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run Yeoman generators. |
| [Babel](https://babeljs.io/docs/usage/cli/) | not available now | Use next generation JavaScript, today. |
| [ESLint](http://eslint.org) | not available now | The pluggable linting utility for JavaScript. |
| [Standard](https://github.com/feross/standard) | [![GitHub stars](https://img.shields.io/github/stars/feross/standard            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JavaScript Standard Style &#x2014; One style to rule them all. |
| [cpy](https://github.com/sindresorhus/cpy) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/cpy            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Copy files. |
| [fkill](https://github.com/sindresorhus/fkill-cli) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/fkill-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Fabulously kill processes. Cross-platform. |
| [vantage](https://github.com/dthree/vantage) | [![GitHub stars](https://img.shields.io/github/stars/dthree/vantage            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Distributed, realtime CLI for your live app. |
| [vtop](https://github.com/MrRio/vtop) | [![GitHub stars](https://img.shields.io/github/stars/MrRio/vtop            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | More better top, with nice charts. |
| [tmpin](https://github.com/sindresorhus/tmpin) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/tmpin            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Adds stdin support to any CLI app that accepts file input. |
| [empty-trash](https://github.com/sindresorhus/empty-trash) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/empty-trash            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Empty the trash. |
| [is-up](https://github.com/sindresorhus/is-up) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/is-up            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check whether a website is up or down. |
| [is-online](https://github.com/sindresorhus/is-online) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/is-online            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check if the internet connection is up. |
| [public-ip](https://github.com/sindresorhus/public-ip) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/public-ip            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get your public IP address. |
| [dark-mode](https://github.com/sindresorhus/dark-mode) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/dark-mode            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Toggle the macOS Dark Mode. |
| [ttystudio](https://github.com/chjj/ttystudio) | [![GitHub stars](https://img.shields.io/github/stars/chjj/ttystudio            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Record your terminal and compile it to a GIF or APNG without any external dependencies, bash scripts, gif concatenation, etc. |
| [David](https://github.com/alanshaw/david) | [![GitHub stars](https://img.shields.io/github/stars/alanshaw/david            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Tells you when your package npm dependencies are out of date. |
| [http-server](https://github.com/indexzero/http-server) | [![GitHub stars](https://img.shields.io/github/stars/indexzero/http-server            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple, zero-config command-line HTTP server. |
| [Live Server](https://github.com/tapio/live-server) | [![GitHub stars](https://img.shields.io/github/stars/tapio/live-server            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A simple development HTTP-server with livereload capability. |
| [bcat](https://github.com/kessler/node-bcat) | [![GitHub stars](https://img.shields.io/github/stars/kessler/node-bcat            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pipe command output to web browsers. |
| [normit](https://github.com/pawurb/normit) | [![GitHub stars](https://img.shields.io/github/stars/pawurb/normit            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Google Translate with speech synthesis in your terminal. |
| [slap](https://github.com/slap-editor/slap) | [![GitHub stars](https://img.shields.io/github/stars/slap-editor/slap            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Sublime-like terminal-based text editor. |
| [jsinspect](https://github.com/danielstjules/jsinspect) | [![GitHub stars](https://img.shields.io/github/stars/danielstjules/jsinspect            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Detect copy-pasted and structurally similar code. |
| [esformatter](https://github.com/millermedeiros/esformatter) | [![GitHub stars](https://img.shields.io/github/stars/millermedeiros/esformatter            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JavaScript code beautifier/formatter. |
| [pjs](https://github.com/danielstjules/pjs) | [![GitHub stars](https://img.shields.io/github/stars/danielstjules/pjs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pipeable JavaScript. Quickly filter, map, and reduce from the terminal. |
| [license-checker](https://github.com/davglass/license-checker) | [![GitHub stars](https://img.shields.io/github/stars/davglass/license-checker            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check licenses of your app&apos;s dependencies. |
| [browser-run](https://github.com/juliangruber/browser-run) | [![GitHub stars](https://img.shields.io/github/stars/juliangruber/browser-run            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Easily run code in a browser environment. |
| [modhelp](https://github.com/runvnc/modhelp) | [![GitHub stars](https://img.shields.io/github/stars/runvnc/modhelp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Syntax-highlighted module READMEs in terminal with ANSI-friendly pager. |
| [wifi-password](https://github.com/kevva/wifi-password) | [![GitHub stars](https://img.shields.io/github/stars/kevva/wifi-password            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the current wifi password. |
| [wallpaper](https://github.com/sindresorhus/wallpaper) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/wallpaper            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Change the desktop wallpaper. |
| [brightness](https://github.com/kevva/brightness-cli) | [![GitHub stars](https://img.shields.io/github/stars/kevva/brightness-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Change the screen brightness. |
| [torrent](https://github.com/maxogden/torrent) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/torrent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Download torrents. |
| [tfa](https://github.com/jasnell/tfa) | [![GitHub stars](https://img.shields.io/github/stars/jasnell/tfa            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Two-factor authentication client. |
| [rtail](https://github.com/kilianc/rtail) | [![GitHub stars](https://img.shields.io/github/stars/kilianc/rtail            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Terminal output to the browser in seconds, using UNIX pipes. |
| [kill-tabs](https://github.com/sindresorhus/kill-tabs) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/kill-tabs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Kill all Chrome tabs to improve performance, decrease battery usage, and save memory. |
| [alex](https://github.com/wooorm/alex) | [![GitHub stars](https://img.shields.io/github/stars/wooorm/alex            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Catch insensitive, inconsiderate writing. |
| [pen](https://github.com/noraesae/pen) | [![GitHub stars](https://img.shields.io/github/stars/noraesae/pen            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Live Markdown preview in the browser from your favorite editor. |
| [subdownloader](https://github.com/beatfreaker/subdownloader) | [![GitHub stars](https://img.shields.io/github/stars/beatfreaker/subdownloader            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Subtitle downloader for movies and TV series. |
| [iponmap](https://github.com/nogizhopaboroda/iponmap) | [![GitHub stars](https://img.shields.io/github/stars/nogizhopaboroda/iponmap            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | IP location finder. |
| [Jsome](https://github.com/Javascipt/Jsome) | [![GitHub stars](https://img.shields.io/github/stars/Javascipt/Jsome            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pretty prints JSON with configurable colors and indentation. |
| [itunes-remote](https://github.com/mischah/itunes-remote) | [![GitHub stars](https://img.shields.io/github/stars/mischah/itunes-remote            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Interactively control iTunes. |
| [dev-time](https://github.com/samverschueren/dev-time-cli) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/dev-time-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the current local time of a GitHub user. |
| [text-meme](https://github.com/beatfreaker/text-meme-cli) | [![GitHub stars](https://img.shields.io/github/stars/beatfreaker/text-meme-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate a text meme. |
| [mobicon](https://github.com/samverschueren/mobicon-cli) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/mobicon-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Mobile app icon generator. |
| [mobisplash](https://github.com/samverschueren/mobisplash-cli) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/mobisplash-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Mobile app splash screen generator. |
| [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) | [![GitHub stars](https://img.shields.io/github/stars/rtfpessoa/diff2html-cli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pretty git diff to HTML generator. |
| [Cash](https://github.com/dthree/cash) | [![GitHub stars](https://img.shields.io/github/stars/dthree/cash            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Cross-platform Unix shell commands in pure JavaScript. |
| [vaca](https://github.com/sindresorhus/vaca) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/vaca            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get a random ASCII <g-emoji alias="cow" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f42e.png">&#x1F42E;</g-emoji>. |
| [gh-home](https://github.com/sindresorhus/gh-home) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/gh-home            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Open the GitHub page of the repo in the current directory. |
| [npm-home](https://github.com/sindresorhus/npm-home) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/npm-home            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Open the npm page of a package. |
| [trymodule](https://github.com/VictorBjelkholm/trymodule) | [![GitHub stars](https://img.shields.io/github/stars/VictorBjelkholm/trymodule            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Try out npm packages in the terminal. |
| [terminal-recorder](https://github.com/cortezcristian/terminal-recorder) | [![GitHub stars](https://img.shields.io/github/stars/cortezcristian/terminal-recorder            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Record your terminal usage and export it to interactive HTML. |
| [jscpd](https://github.com/kucherenko/jscpd) | [![GitHub stars](https://img.shields.io/github/stars/kucherenko/jscpd            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Copy/paste detector for source code. |
| [atmo](https://github.com/Raathigesh/Atmo) | [![GitHub stars](https://img.shields.io/github/stars/Raathigesh/Atmo            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Server-side API mocking. |


### Functional programming
|name|star|description|
|----|----|-----------|
| [lodash](https://lodash.com) | not available now | A utility library delivering consistency, customization, performance, &amp; extras. A better and faster Underscore.js. |
| [immutable](https://github.com/facebook/immutable-js) | [![GitHub stars](https://img.shields.io/github/stars/facebook/immutable-js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Immutable data collections. |
| [mori](http://swannodette.github.io/mori/) | not available now | A library for using ClojureScript&apos;s persistent data structures and supporting API from the comfort of vanilla JavaScript. |
| [Ramda](http://ramdajs.com) | not available now | A utility library with a focus on flexible functional composition enabled by automatic currying and reversed argument order. Avoids mutating data. |
| [Folktale](http://folktalejs.org) | not available now | A suite of libraries for generic functional programming in JavaScript that allows you to write elegant, modular applications with fewer bugs, and more reuse. |
| [underscore-contrib](http://documentcloud.github.io/underscore-contrib/) | not available now | The brass buckles on Underscore&apos;s utility belt. |
| [Mout](http://moutjs.com) | not available now | Utility library with the biggest difference between other existing solutions is that you can choose to load only the modules/functions that you need, no extra overhead. |
| [Bacon.js](http://baconjs.github.io) | not available now | Functional reactive programming. |
| [RxJS](http://reactivex.io) | not available now | Functional reactive library for transforming, composing, and querying various kinds of data. |
| [Lazy.js](https://github.com/dtao/lazy.js) | [![GitHub stars](https://img.shields.io/github/stars/dtao/lazy.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Utility library similar to lodash/Underscore but with lazy evaluation, which can translate to superior performance in many cases. |
| [Kefir.js](https://github.com/rpominov/kefir) | [![GitHub stars](https://img.shields.io/github/stars/rpominov/kefir            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Reactive library with focus on high performance and low memory usage. |


### HTTP
|name|star|description|
|----|----|-----------|
| [got](https://github.com/sindresorhus/got) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/got            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A nicer interface to the built-in <code>http</code> module. |
| [gh-got](https://github.com/sindresorhus/gh-got) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/gh-got            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convenience wrapper for <code>got</code> to interact with the GitHub API. |
| [request](https://github.com/request/request) | [![GitHub stars](https://img.shields.io/github/stars/request/request            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simplified HTTP request client. |
| [Nock](https://github.com/pgte/nock) | [![GitHub stars](https://img.shields.io/github/stars/pgte/nock            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A HTTP mocking and expectations library. |
| [hyperquest](https://github.com/substack/hyperquest) | [![GitHub stars](https://img.shields.io/github/stars/substack/hyperquest            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming HTTP requests. |
| [axios](https://github.com/mzabriskie/axios) | [![GitHub stars](https://img.shields.io/github/stars/mzabriskie/axios            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Promise based HTTP client (works in the browser too). |
| [spdy](https://github.com/indutny/node-spdy) | [![GitHub stars](https://img.shields.io/github/stars/indutny/node-spdy            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Creates SPDY servers with the same API as the built-in <code>https</code> module. |
| [wreck](https://github.com/hapijs/wreck) | [![GitHub stars](https://img.shields.io/github/stars/hapijs/wreck            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | HTTP Client Utilities. |
| [download](https://github.com/kevva/download) | [![GitHub stars](https://img.shields.io/github/stars/kevva/download            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Download and extract files effortlessly. |
| [http-proxy](https://github.com/nodejitsu/node-http-proxy) | [![GitHub stars](https://img.shields.io/github/stars/nodejitsu/node-http-proxy            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A full-featured HTTP proxy. |
| [rocky](https://github.com/h2non/rocky) | [![GitHub stars](https://img.shields.io/github/stars/h2non/rocky            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Featured, middleware-oriented HTTP proxy with traffic replay and intercept. |
| [superagent](https://github.com/visionmedia/superagent) | [![GitHub stars](https://img.shields.io/github/stars/visionmedia/superagent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A small progressive HTTP request library. |
| [node-fetch](https://github.com/bitinn/node-fetch) | [![GitHub stars](https://img.shields.io/github/stars/bitinn/node-fetch            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | <code>window.fetch</code> for Node.js. |


### Debugging / Profiling
|name|star|description|
|----|----|-----------|
| [ironNode](https://github.com/s-a/iron-node) | [![GitHub stars](https://img.shields.io/github/stars/s-a/iron-node            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js debugger supporting ES2015 out of the box. |
| [node-inspector](https://github.com/node-inspector/node-inspector) | [![GitHub stars](https://img.shields.io/github/stars/node-inspector/node-inspector            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Debugger based on Blink Developer Tools. |
| [Theseus](https://github.com/adobe-research/theseus) | [![GitHub stars](https://img.shields.io/github/stars/adobe-research/theseus            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A new type of JavaScript debugger featuring real-time code coverage, retroactive inspection and asynchronous call tree. |
| [longjohn](https://github.com/mattinsler/longjohn) | [![GitHub stars](https://img.shields.io/github/stars/mattinsler/longjohn            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Long stack traces with configurable call trace length. |
| [debug](https://github.com/visionmedia/debug) | [![GitHub stars](https://img.shields.io/github/stars/visionmedia/debug            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Tiny debugging utility. |
| [jstrace](https://github.com/jstrace/jstrace) | [![GitHub stars](https://img.shields.io/github/stars/jstrace/jstrace            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Dynamic tracing for JavaScript, similar to dtrace, ktap etc. |
| [why-is-node-running](https://github.com/mafintosh/why-is-node-running) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/why-is-node-running            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js is running but you don&apos;t know why? |
| [njsTrace](https://github.com/valyouw/njstrace) | [![GitHub stars](https://img.shields.io/github/stars/valyouw/njstrace            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function. |
| [vstream](https://github.com/joyent/node-vstream) | [![GitHub stars](https://img.shields.io/github/stars/joyent/node-vstream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Instrumentable streams mix-ins to inspect a pipeline of streams. |
| [stackman](https://github.com/watson/stackman) | [![GitHub stars](https://img.shields.io/github/stars/watson/stackman            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Enhance an error stacktrace with code excerpts and other goodies. |
| [TraceGL](https://github.com/traceglMPL/tracegl) | [![GitHub stars](https://img.shields.io/github/stars/traceglMPL/tracegl            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Transforms your JavaScript, injecting monitoring code that produces a log of everything that happens. |
| [locus](https://github.com/alidavut/locus) | [![GitHub stars](https://img.shields.io/github/stars/alidavut/locus            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Starts a REPL at runtime that has access to all variables. |
| [bugger](https://github.com/buggerjs/bugger) | [![GitHub stars](https://img.shields.io/github/stars/buggerjs/bugger            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Provides Chrome Devtools bindings to debug programs in Chrome. |
| [0x](https://github.com/davidmarkclements/0x) | [![GitHub stars](https://img.shields.io/github/stars/davidmarkclements/0x            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Flamegraph profiling. |
| [ctrace](https://github.com/automation-stack/ctrace) | [![GitHub stars](https://img.shields.io/github/stars/automation-stack/ctrace            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Well-formatted and improved trace system calls and signals. |


### Logging
|name|star|description|
|----|----|-----------|
| [winston](https://github.com/winstonjs/winston) | [![GitHub stars](https://img.shields.io/github/stars/winstonjs/winston            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A multi-transport async logging library. |
| [Bunyan](https://github.com/trentm/node-bunyan) | [![GitHub stars](https://img.shields.io/github/stars/trentm/node-bunyan            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A simple and fast JSON logging library. |
| [intel](http://seanmonstar.github.io/intel/) | not available now | A comprehensive logging library (handlers, filters, formatters, console injection). |
| [console-log-level](https://github.com/watson/console-log-level) | [![GitHub stars](https://img.shields.io/github/stars/watson/console-log-level            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | The most simple logger imaginable with support for log levels and custom prefixes. |
| [storyboard](https://github.com/guigrpa/storyboard) | [![GitHub stars](https://img.shields.io/github/stars/guigrpa/storyboard            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | End-to-end, hierarchical, real-time, colorful logs and stories. |


### Command-line utilities
|name|star|description|
|----|----|-----------|
| [chalk](https://github.com/chalk/chalk) | [![GitHub stars](https://img.shields.io/github/stars/chalk/chalk            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Terminal string styling done right. |
| [meow](https://github.com/sindresorhus/meow) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/meow            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CLI app helper. |
| [minimist](https://github.com/substack/minimist) | [![GitHub stars](https://img.shields.io/github/stars/substack/minimist            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse command-line flags. |
| [get-stdin](https://github.com/sindresorhus/get-stdin) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/get-stdin            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Easier stdin. |
| [user-home](https://github.com/sindresorhus/user-home) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/user-home            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the path to the user home directory. |
| [log-update](https://github.com/sindresorhus/log-update) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/log-update            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc. |
| [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) | [![GitHub stars](https://img.shields.io/github/stars/SBoudrias/Inquirer.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Interactive command-line prompt. |
| [update-notifier](https://github.com/yeoman/update-notifier) | [![GitHub stars](https://img.shields.io/github/stars/yeoman/update-notifier            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Update notifications for your CLI app. |
| [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/ansi-escapes            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ANSI escape codes for manipulating the terminal. |
| [sudo-block](https://github.com/sindresorhus/sudo-block) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/sudo-block            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Block users from running your app with root permissions. |
| [configstore](https://github.com/yeoman/configstore) | [![GitHub stars](https://img.shields.io/github/stars/yeoman/configstore            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Easily load and persist config without having to think about where and how. |
| [insight](https://github.com/yeoman/insight) | [![GitHub stars](https://img.shields.io/github/stars/yeoman/insight            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Helps you understand how your tool is being used by anonymously reporting usage metrics to Google Analytics. |
| [log-symbols](https://github.com/sindresorhus/log-symbols) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/log-symbols            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Colored symbols for various log levels. |
| [figures](https://github.com/sindresorhus/figures) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/figures            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Unicode symbols with Windows CMD fallbacks. |
| [boxen](https://github.com/sindresorhus/boxen) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/boxen            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Create boxes in the terminal. |
| [string-width](https://github.com/sindresorhus/string-width) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/string-width            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the visual width of a string - the number of columns required to display it. |
| [first-run](https://github.com/sindresorhus/first-run) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/first-run            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check if it&apos;s the first time the process is run. |
| [sparkly](https://github.com/sindresorhus/sparkly) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/sparkly            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate sparklines &#x2581;&#x2582;&#x2583;&#x2585;&#x2582;&#x2587; |
| [vorpal](https://github.com/dthree/vorpal) | [![GitHub stars](https://img.shields.io/github/stars/dthree/vorpal            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A framework for interactive CLI apps. |
| [blessed](https://github.com/chjj/blessed) | [![GitHub stars](https://img.shields.io/github/stars/chjj/blessed            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A curses-like library. |
| [yn](https://github.com/sindresorhus/yn) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/yn            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse yes/no like values. |
| [cli-table](https://github.com/Automattic/cli-table) | [![GitHub stars](https://img.shields.io/github/stars/Automattic/cli-table            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pretty unicode tables. |
| [drawille](https://github.com/madbence/node-drawille) | [![GitHub stars](https://img.shields.io/github/stars/madbence/node-drawille            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Draw on the terminal with unicode braille characters. |
| [googleauth](https://github.com/maxogden/googleauth) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/googleauth            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Create and load persistent Google authentication tokens for command-line apps. |
| [ascii-charts](https://github.com/jstrace/chart) | [![GitHub stars](https://img.shields.io/github/stars/jstrace/chart            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ASCII bar chart in the terminal. |
| [progress](https://github.com/tj/node-progress) | [![GitHub stars](https://img.shields.io/github/stars/tj/node-progress            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Flexible ascii progress bar. |
| [cli-cursor](https://github.com/sindresorhus/cli-cursor) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/cli-cursor            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Toggle the CLI cursor. |
| [columnify](https://github.com/timoxley/columnify) | [![GitHub stars](https://img.shields.io/github/stars/timoxley/columnify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Create text-based columns suitable for console output. Supports cell wrapping. |
| [cli-columns](https://github.com/shannonmoeller/cli-columns) | [![GitHub stars](https://img.shields.io/github/stars/shannonmoeller/cli-columns            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Columnated unicode and ansi-safe text lists. |
| [cfonts](https://github.com/dominikwilkowski/cfonts) | [![GitHub stars](https://img.shields.io/github/stars/dominikwilkowski/cfonts            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Sexy ASCII fonts for the console. |
| [multispinner](https://github.com/codekirei/node-multispinner) | [![GitHub stars](https://img.shields.io/github/stars/codekirei/node-multispinner            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Multiple, simultaneous, individually controllable CLI spinners. |
| [omelette](https://github.com/f/omelette) | [![GitHub stars](https://img.shields.io/github/stars/f/omelette            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Shell autocompletion helper. |
| [cross-env](https://github.com/kentcdodds/cross-env) | [![GitHub stars](https://img.shields.io/github/stars/kentcdodds/cross-env            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Set environment variables cross-platform. |
| [shelljs](https://github.com/shelljs/shelljs) | [![GitHub stars](https://img.shields.io/github/stars/shelljs/shelljs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Portable Unix shell commands. |
| [loud-rejection](https://github.com/sindresorhus/loud-rejection) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/loud-rejection            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Make unhandled promise rejections fail loudly instead of the default silent fail. |
| [ora](https://github.com/sindresorhus/ora) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/ora            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Elegant terminal spinner. |
| [term-img](https://github.com/sindresorhus/term-img) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/term-img            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Display images in your terminal. |
| [yargs](https://github.com/yargs/yargs) | [![GitHub stars](https://img.shields.io/github/stars/yargs/yargs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Command-line parser that automatically generates an elegant user-interface. |
| [liftoff](https://github.com/js-cli/js-liftoff) | [![GitHub stars](https://img.shields.io/github/stars/js-cli/js-liftoff            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Bootstrapping tool for building command-line app. |
| [listr](https://github.com/samverschueren/listr) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/listr            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Terminal task list. |


### Build tools
|name|star|description|
|----|----|-----------|
| [gulp](http://gulpjs.com) | not available now | Streaming and fast build system that favors code over config. |
| [Broccoli](https://github.com/broccolijs/broccoli) | [![GitHub stars](https://img.shields.io/github/stars/broccolijs/broccoli            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions. |
| [browserify](https://github.com/substack/node-browserify) | [![GitHub stars](https://img.shields.io/github/stars/substack/node-browserify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Browser-side require() the Node.js way. |
| [webpack](https://github.com/webpack/webpack) | [![GitHub stars](https://img.shields.io/github/stars/webpack/webpack            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Packs modules and assets for the browser. |
| [Brunch](https://github.com/brunch/brunch) | [![GitHub stars](https://img.shields.io/github/stars/brunch/brunch            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Front-end web app build tool with simple declarative config, fast incremental compilation, and an opinionated workflow. |
| [strong-build](https://github.com/strongloop/strong-build) | [![GitHub stars](https://img.shields.io/github/stars/strongloop/strong-build            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Build a node app package and prepare to deploy it as a package to production or use git to commit to a deploy branch. |
| [grunt](http://gruntjs.com) | not available now | Task runner that can perform repetitive tasks like minification, compilation, unit testing, linting, etc. |
| [start](https://github.com/start-runner/start) | [![GitHub stars](https://img.shields.io/github/stars/start-runner/start            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple tasks runner powered by composable functions and promise chaining. |
| [ygor](https://github.com/shannonmoeller/ygor) | [![GitHub stars](https://img.shields.io/github/stars/shannonmoeller/ygor            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A promising task runner for when <code>npm run</code> isn&apos;t enough and everything else is too much. |
| [Fly](https://github.com/bucaran/fly) | [![GitHub stars](https://img.shields.io/github/stars/bucaran/fly            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Modern build system based in co-routines, generators and promises. |


### Hardware
|name|star|description|
|----|----|-----------|
| [johnny-five](https://github.com/rwaldron/johnny-five) | [![GitHub stars](https://img.shields.io/github/stars/rwaldron/johnny-five            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Firmata based Arduino Framework. |
| [serialport](https://github.com/voodootikigod/node-serialport) | [![GitHub stars](https://img.shields.io/github/stars/voodootikigod/node-serialport            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Access serial ports for reading and writing. |
| [usb](https://github.com/nonolith/node-usb) | [![GitHub stars](https://img.shields.io/github/stars/nonolith/node-usb            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | USB library. |
| [cylon.js](http://cylonjs.com) | not available now | Next generation robotics framework with support for 26 different platforms. |
| [i2c-bus](https://github.com/fivdi/i2c-bus) | [![GitHub stars](https://img.shields.io/github/stars/fivdi/i2c-bus            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | I2C serial bus access. |


### Templating
|name|star|description|
|----|----|-----------|
| [marko](https://github.com/marko-js/marko) | [![GitHub stars](https://img.shields.io/github/stars/marko-js/marko            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags. |
| [nunjucks](https://github.com/mozilla/nunjucks) | [![GitHub stars](https://img.shields.io/github/stars/mozilla/nunjucks            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A powerful templating engine with inheritance, asynchronous control, and more (jinja2 inspired). |
| [handlebars.js](https://github.com/wycats/handlebars.js) | [![GitHub stars](https://img.shields.io/github/stars/wycats/handlebars.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A superset of Mustache templates which adds powerful features like helpers and more advanced blocks. |
| [hogan.js](http://twitter.github.io/hogan.js/) | not available now | Twitter&apos;s small, fast, phase-separated compiler for Mustache templates. |
| [EJS](https://github.com/mde/ejs) | [![GitHub stars](https://img.shields.io/github/stars/mde/ejs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple unopinionated templating language. |
| [Pug](https://github.com/pugjs/pug) | [![GitHub stars](https://img.shields.io/github/stars/pugjs/pug            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | High-performance template engine heavily influenced by Haml. |


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
| [Interfake](https://github.com/basicallydan/interfake) | [![GitHub stars](https://img.shields.io/github/stars/basicallydan/interfake            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Rapid prototyping framework for making mock HTTP APIs, with a Node.js, command-line and HTTP interface. |
| [Derby](https://github.com/derbyjs/derby) | [![GitHub stars](https://img.shields.io/github/stars/derbyjs/derby            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | MVC framework, making it easy to write realtime, collaborative applications that run in both Node.js and browsers. |
| [Restberry](http://restberry.com) | not available now | Framework for setting up RESTful JSON APIs, applied to your database models without needing to write any code. |
| [Catberry](http://catberry.org) | not available now | Framework with Flux architecture, isomorphic web-components, and progressive rendering. |
| [ThinkJS](https://thinkjs.org) | not available now | Framework with ES2015+ support, WebSockets, REST API. |


### Documentation
|name|star|description|
|----|----|-----------|
| [Docco](http://jashkenas.github.io/docco/) | not available now | A quick-and-dirty documentation generator which produces an HTML document that displays your comments intermingled with your code. |
| [JSDoc](http://usejsdoc.org) | not available now | API documentation generator similar to JavaDoc or PHPDoc. |
| [dox](https://github.com/tj/dox) | [![GitHub stars](https://img.shields.io/github/stars/tj/dox            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JavaScript documentation generator using Markdown and JSDoc. |
| [jsdox](https://github.com/sutoiku/jsdox) | [![GitHub stars](https://img.shields.io/github/stars/sutoiku/jsdox            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JSDoc3 to Markdown documentation generator. |
| [apiDoc](https://github.com/apidoc/apidoc) | [![GitHub stars](https://img.shields.io/github/stars/apidoc/apidoc            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Inline documentation for RESTful web APIs. |
| [documentation.js](http://documentation.js.org) | not available now | API documentation generator with support for ES2015+ and flow annotation. |
| [YUIDoc](http://yui.github.com/yuidoc/) | not available now | Generates API documentation from comments in source. |
| [ESDoc](https://esdoc.org) | not available now | Documentation generator targeting ES2015, attaching test code and measuring documentation coverage. |


### Filesystem
|name|star|description|
|----|----|-----------|
| [del](https://github.com/sindresorhus/del) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/del            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Delete files/folders using globs. |
| [globby](https://github.com/sindresorhus/globby) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/globby            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Glob files with support for multiple patterns. |
| [cpy](https://github.com/sindresorhus/cpy) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/cpy            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Copy files. |
| [rimraf](https://github.com/isaacs/rimraf) | [![GitHub stars](https://img.shields.io/github/stars/isaacs/rimraf            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Recursively delete files like <code>rm -rf</code>. |
| [mkdirp](https://github.com/substack/node-mkdirp) | [![GitHub stars](https://img.shields.io/github/stars/substack/node-mkdirp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Recursively create directories like <code>mkdir -p</code>. |
| [graceful-fs](https://github.com/isaacs/node-graceful-fs) | [![GitHub stars](https://img.shields.io/github/stars/isaacs/node-graceful-fs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Drop-in replacement for the <code>fs</code> module with various improvements. |
| [chokidar](https://github.com/paulmillr/chokidar) | [![GitHub stars](https://img.shields.io/github/stars/paulmillr/chokidar            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Filesystem watcher which stabilizes events from <code>fs.watch</code> and <code>fs.watchFile</code> as well as using native <code>fsevents</code> on macOS. |
| [find-up](https://github.com/sindresorhus/find-up) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/find-up            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Find a file by walking up parent directories. |
| [load-json-file](https://github.com/sindresorhus/load-json-file) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/load-json-file            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Read and parse a JSON file. |
| [write-json-file](https://github.com/sindresorhus/write-json-file) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/write-json-file            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Stringify and write JSON to a file atomically. |
| [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) | [![GitHub stars](https://img.shields.io/github/stars/npm/fs-write-stream-atomic            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Like <code>fs.createWriteStream()</code>, but atomic. |
| [filenamify](https://github.com/sindresorhus/filenamify) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/filenamify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert a string to a valid filename. |
| [lnfs](https://github.com/kevva/lnfs) | [![GitHub stars](https://img.shields.io/github/stars/kevva/lnfs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Force create symlinks like <code>ln -fs</code>. |
| [istextorbinary](https://github.com/bevry/istextorbinary) | [![GitHub stars](https://img.shields.io/github/stars/bevry/istextorbinary            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check if a file is text or binary. |
| [fs-jetpack](https://github.com/szwacz/fs-jetpack) | [![GitHub stars](https://img.shields.io/github/stars/szwacz/fs-jetpack            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Completely redesigned file system API for convenience in everyday use. |
| [fs-extra](https://github.com/jprichardson/node-fs-extra) | [![GitHub stars](https://img.shields.io/github/stars/jprichardson/node-fs-extra            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Extra methods for the <code>fs</code> module. |
| [pkg-dir](https://github.com/sindresorhus/pkg-dir) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pkg-dir            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Find the root directory of an npm package. |
| [sander](https://github.com/rich-harris/sander) | [![GitHub stars](https://img.shields.io/github/stars/rich-harris/sander            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Promise-based replacement for the <code>fs</code> module. |


### Control flow Promises
|name|star|description|
|----|----|-----------|
| [Bluebird](https://github.com/petkaantonov/bluebird) | [![GitHub stars](https://img.shields.io/github/stars/petkaantonov/bluebird            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A fully featured promise library with focus on innovative features and performance. |
| [pinkie-promise](https://github.com/floatdrop/pinkie-promise) | [![GitHub stars](https://img.shields.io/github/stars/floatdrop/pinkie-promise            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Promise ponyfill. |
| [pify](https://github.com/sindresorhus/pify) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Promisify a callback-style function. |
| [rfpify](https://github.com/samverschueren/rfpify) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/rfpify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Promisify a result-first callback-style function. |
| [delay](https://github.com/sindresorhus/delay) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/delay            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Delay a promise a specified amount of time. |


### Control flow Callbacks
|name|star|description|
|----|----|-----------|
| [each-async](https://github.com/sindresorhus/each-async) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/each-async            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Async concurrent iterator like forEach. |
| [async](https://github.com/caolan/async) | [![GitHub stars](https://img.shields.io/github/stars/caolan/async            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Provides straight-forward, powerful functions for working with asynchronicity. |
| [async-chainable](https://github.com/hash-bang/async-chainable) | [![GitHub stars](https://img.shields.io/github/stars/hash-bang/async-chainable            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Chainable, pluggable async functionality. |
| [after-all-results](https://github.com/watson/after-all-results) | [![GitHub stars](https://img.shields.io/github/stars/watson/after-all-results            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Bundle results of async functions calls into one callback with all the results. |


### Control flow Generators
|name|star|description|
|----|----|-----------|
| [co](https://github.com/tj/co) | [![GitHub stars](https://img.shields.io/github/stars/tj/co            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | The ultimate generator based flow-control goodness. |
| [suspend](https://github.com/jmar777/suspend) | [![GitHub stars](https://img.shields.io/github/stars/jmar777/suspend            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generator-based control flow that plays nice with callbacks, promises, and thunks. |
| [bluebird-co](https://github.com/novacrazy/bluebird-co) | [![GitHub stars](https://img.shields.io/github/stars/novacrazy/bluebird-co            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A set of high performance yield handlers for Bluebird coroutines. |
| [iterum](https://github.com/xgbuils/iterum) | [![GitHub stars](https://img.shields.io/github/stars/xgbuils/iterum            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Build generator pipelines using Array-like methods. |


### Control flow Streams
|name|star|description|
|----|----|-----------|
| [Highland.js](http://highlandjs.org) | not available now | Manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams. |


### Control flow Channels
|name|star|description|
|----|----|-----------|
| [js-csp](https://github.com/jlongster/js-csp) | [![GitHub stars](https://img.shields.io/github/stars/jlongster/js-csp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Communicating sequential processes for JavaScript (like Clojurescript core.async, or Go). |


### Control flow Other
|name|star|description|
|----|----|-----------|
| [zone](https://github.com/strongloop/zone) | [![GitHub stars](https://img.shields.io/github/stars/strongloop/zone            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Provides a way to group and track resources and errors across asynchronous operations. |


### Streams
|name|star|description|
|----|----|-----------|
| [through2](https://github.com/rvagg/through2) | [![GitHub stars](https://img.shields.io/github/stars/rvagg/through2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Tiny wrapper around streams2 Transform to avoid explicit subclassing noise. |
| [from2](https://github.com/hughsk/from2) | [![GitHub stars](https://img.shields.io/github/stars/hughsk/from2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convenience wrapper for ReadableStream, inspired by <code>through2</code>. |
| [get-stream](https://github.com/sindresorhus/get-stream) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/get-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get a stream as a string or buffer. |
| [concat-stream](https://github.com/maxogden/concat-stream) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/concat-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Concatenates a stream into strings or binary data. |
| [into-stream](https://github.com/sindresorhus/into-stream) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/into-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert a buffer/string/array/object into a stream. |
| [duplexify](https://github.com/mafintosh/duplexify) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/duplexify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Turn a writeable and readable stream into a single streams2 duplex stream. |
| [pumpify](https://github.com/mafintosh/pumpify) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/pumpify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Combine an array of streams into a single duplex stream. |
| [peek-stream](https://github.com/mafintosh/peek-stream) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/peek-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Transform stream that lets you peek the first line before deciding how to parse it. |
| [binary-split](https://github.com/maxogden/binary-split) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/binary-split            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A fast newline (or any delimiter) splitter stream. |
| [byline](https://github.com/jahewson/node-byline) | [![GitHub stars](https://img.shields.io/github/stars/jahewson/node-byline            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Super-simple line-by-line Stream reader. |
| [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/first-chunk-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Transform the first chunk in a stream. |
| [pad-stream](https://github.com/sindresorhus/pad-stream) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pad-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Pad each line in a stream. |
| [multistream](https://github.com/feross/multistream) | [![GitHub stars](https://img.shields.io/github/stars/feross/multistream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Combine multiple streams into a single stream. |
| [stream-combiner2](https://github.com/substack/stream-combiner2) | [![GitHub stars](https://img.shields.io/github/stars/substack/stream-combiner2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Turn a pipeline into a single stream. |
| [readable-stream](https://github.com/nodejs/readable-stream) | [![GitHub stars](https://img.shields.io/github/stars/nodejs/readable-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Mirror of Streams2 and Streams3 implementations in core. |
| [through2-concurrent](https://github.com/almost/through2-concurrent) | [![GitHub stars](https://img.shields.io/github/stars/almost/through2-concurrent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Transform object streams concurrently. |
| [graphicsmagick-stream](https://github.com/e-conomic/graphicsmagick-stream) | [![GitHub stars](https://img.shields.io/github/stars/e-conomic/graphicsmagick-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Fast conversion/scaling of images using a pool of long lived GraphicsMagick processes. |


### Real-time
|name|star|description|
|----|----|-----------|
| [Socket.io](http://socket.io) | not available now | Enables real-time bidirectional event-based communication. |
| [SockJS](https://github.com/sockjs/sockjs-node) | [![GitHub stars](https://img.shields.io/github/stars/sockjs/sockjs-node            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Low latency, full duplex, cross-domain channel browser-server, with WebSockets or without. |
| [Faye](http://faye.jcoglan.com) | not available now | Real-time client-server message bus, based on Bayeux protocol. |
| [SocketCluster](https://github.com/SocketCluster/socketcluster) | [![GitHub stars](https://img.shields.io/github/stars/SocketCluster/socketcluster            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Scalable HTTP + WebSocket engine which can run on multiple CPU cores. |
| [Primus](https://github.com/primus/primus) | [![GitHub stars](https://img.shields.io/github/stars/primus/primus            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | An abstraction layer for real-time frameworks to prevent module lock-in. |
| [Straw](https://github.com/simonswain/straw) | [![GitHub stars](https://img.shields.io/github/stars/simonswain/straw            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Real-time dataflow framework. |
| [deepstream.io](https://deepstream.io) | not available now | Scalable real-time microservice framework. |
| [Kalm](https://github.com/fed135/Kalm) | [![GitHub stars](https://img.shields.io/github/stars/fed135/Kalm            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Modular socket wrapper and optimizer. |


### Image
|name|star|description|
|----|----|-----------|
| [sharp](https://github.com/lovell/sharp) | [![GitHub stars](https://img.shields.io/github/stars/lovell/sharp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | The fastest module for resizing JPEG, PNG, WebP and TIFF images. |
| [image-type](https://github.com/sindresorhus/image-type) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/image-type            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Detect the image type of a Buffer/Uint8Array. |
| [gm](https://github.com/aheckmann/gm) | [![GitHub stars](https://img.shields.io/github/stars/aheckmann/gm            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | GraphicsMagick and ImageMagick wrapper. |
| [lwip](https://github.com/EyalAr/lwip) | [![GitHub stars](https://img.shields.io/github/stars/EyalAr/lwip            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Lightweight image processor which does not require ImageMagick. |
| [pica](https://github.com/nodeca/pica) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/pica            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | High quality &amp; fast resize (lanczos3) in pure JS. Alternative to canvas drawImage(), when no pixelation allowed. |
| [jimp](https://github.com/oliver-moran/jimp) | [![GitHub stars](https://img.shields.io/github/stars/oliver-moran/jimp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Image processing in pure JavaScript. |
| [is-progressive](https://github.com/sindresorhus/is-progressive) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/is-progressive            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Check if a JPEG image is progressive. |
| [probe-image-size](https://github.com/nodeca/probe-image-size) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/probe-image-size            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the size of most image formats without a full download. |


### Text
|name|star|description|
|----|----|-----------|
| [Underscore.string](https://github.com/epeli/underscore.string) | [![GitHub stars](https://img.shields.io/github/stars/epeli/underscore.string            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Collection of string manipulation utilities. |
| [iconv-lite](https://github.com/ashtuchkin/iconv-lite) | [![GitHub stars](https://img.shields.io/github/stars/ashtuchkin/iconv-lite            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert character encodings. |
| [repeating](https://github.com/sindresorhus/repeating) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/repeating            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Repeat a string. |
| [string-length](https://github.com/sindresorhus/string-length) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/string-length            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes. |
| [camelcase](https://github.com/sindresorhus/camelcase) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/camelcase            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert a dash/dot/underscore/space separated string to camelCase: foo-bar &#x2192; fooBar. |
| [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/escape-string-regexp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Escape RegExp special characters. |
| [execall](https://github.com/sindresorhus/execall) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/execall            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Find multiple RegExp matches in a string. |
| [splice-string](https://github.com/sindresorhus/splice-string) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/splice-string            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Remove or replace part of a string like <code>Array#splice</code>. |
| [indent-string](https://github.com/sindresorhus/indent-string) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/indent-string            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Indent each line in a string. |
| [strip-indent](https://github.com/sindresorhus/strip-indent) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/strip-indent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Strip leading whitespace from every line in a string. |
| [detect-indent](https://github.com/sindresorhus/detect-indent) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/detect-indent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Detect the indentation of code. |
| [he](https://github.com/mathiasbynens/he) | [![GitHub stars](https://img.shields.io/github/stars/mathiasbynens/he            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A robust HTML entity encoder/decoder. |
| [i18n-node](https://github.com/mashpie/i18n-node) | [![GitHub stars](https://img.shields.io/github/stars/mashpie/i18n-node            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple translation module with dynamic JSON storage. |
| [babelfish](https://github.com/nodeca/babelfish) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/babelfish            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | i18n with very easy syntax for plurals. |
| [parse-columns](https://github.com/sindresorhus/parse-columns) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/parse-columns            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse text columns, like the output of Unix commands. |
| [hanging-indent](https://github.com/codekirei/hanging-indent) | [![GitHub stars](https://img.shields.io/github/stars/codekirei/hanging-indent            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Format a string into a hanging-indented paragraph. |
| [matcher](https://github.com/sindresorhus/matcher) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/matcher            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple wildcard matching. |


### Number
|name|star|description|
|----|----|-----------|
| [random-int](https://github.com/sindresorhus/random-int) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/random-int            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate a random integer. |
| [random-float](https://github.com/sindresorhus/random-float) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/random-float            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate a random float. |
| [unique-random](https://github.com/sindresorhus/unique-random) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/unique-random            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate random numbers that are consecutively unique. |
| [round-to](https://github.com/sindresorhus/round-to) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/round-to            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Round a number to a specific number of decimal places: <code>1.234</code> &#x2192; <code>1.2</code>. |


### Math
|name|star|description|
|----|----|-----------|
| [ndarray](https://github.com/scijs/ndarray) | [![GitHub stars](https://img.shields.io/github/stars/scijs/ndarray            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Multidimensional arrays. |
| [mathjs](https://github.com/josdejong/mathjs) | [![GitHub stars](https://img.shields.io/github/stars/josdejong/mathjs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | An extensive math library. |
| [math-sum](https://github.com/sindresorhus/math-sum) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/math-sum            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Sum numbers. |
| [math-clamp](https://github.com/sindresorhus/math-clamp) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/math-clamp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Clamp a number. |
| [algebra](https://github.com/fibo/algebra) | [![GitHub stars](https://img.shields.io/github/stars/fibo/algebra            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Algebraic structures. |


### Date
|name|star|description|
|----|----|-----------|
| [Moment.js](http://momentjs.com) | not available now | Parse, validate, manipulate, and display dates. |
| [Moment Timezone](http://momentjs.com/timezone/) | not available now | IANA Time Zone Database + Moment.js. |
| [dateformat](https://github.com/felixge/node-dateformat) | [![GitHub stars](https://img.shields.io/github/stars/felixge/node-dateformat            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Date formatting. |
| [tz-format](https://github.com/samverschueren/tz-format) | [![GitHub stars](https://img.shields.io/github/stars/samverschueren/tz-format            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Format a date with timezone: <code>2015-11-30T10:40:35+01:00</code>. |


### URL
|name|star|description|
|----|----|-----------|
| [normalize-url](https://github.com/sindresorhus/normalize-url) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/normalize-url            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Normalize a URL. |
| [humanize-url](https://github.com/sindresorhus/humanize-url) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/humanize-url            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Humanize a URL: <a href="http://sindresorhus.com">http://sindresorhus.com</a> &#x2192; sindresorhus.com. |
| [url-unshort](https://github.com/nodeca/url-unshort) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/url-unshort            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Expand shortened URLs. |
| [speakingurl](https://github.com/pid/speakingurl) | [![GitHub stars](https://img.shields.io/github/stars/pid/speakingurl            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate a slug from a string with transliteration. |
| [linkify-it](https://github.com/markdown-it/linkify-it) | [![GitHub stars](https://img.shields.io/github/stars/markdown-it/linkify-it            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Link patterns detector with full unicode support. |
| [url-pattern](https://github.com/snd/url-pattern) | [![GitHub stars](https://img.shields.io/github/stars/snd/url-pattern            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Easier than regex string matching patterns for URLs and other strings. |
| [embedza](https://github.com/nodeca/embedza) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/embedza            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Create HTML snippets/embeds from URLs using info from oEmbed, Open Graph, meta tags. |


### Data validation
|name|star|description|
|----|----|-----------|
| [joi](https://github.com/hapijs/joi) | [![GitHub stars](https://img.shields.io/github/stars/hapijs/joi            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Object schema description language and validator for JavaScript objects. |
| [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/is-my-json-valid            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JSON Schema validator that uses code generation to be extremely fast. |
| [property-validator](https://github.com/nettofarah/property-validator) | [![GitHub stars](https://img.shields.io/github/stars/nettofarah/property-validator            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Easy property validation for Express. |
| [schema-inspector](https://github.com/Atinux/schema-inspector) | [![GitHub stars](https://img.shields.io/github/stars/Atinux/schema-inspector            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JSON API sanitization and validation. |


### Parsing
|name|star|description|
|----|----|-----------|
| [remark](https://github.com/wooorm/remark) | [![GitHub stars](https://img.shields.io/github/stars/wooorm/remark            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Markdown processor powered by plugins. |
| [markdown-it](https://github.com/markdown-it/markdown-it) | [![GitHub stars](https://img.shields.io/github/stars/markdown-it/markdown-it            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A very fast markdown parser with 100% CommonMark support, extensions and syntax plugins. |
| [parse5](https://github.com/inikulin/parse5) | [![GitHub stars](https://img.shields.io/github/stars/inikulin/parse5            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Fast full-featured spec compliant HTML parser. |
| [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/strip-json-comments            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Strip comments from JSON. |
| [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/strip-css-comments            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Strip comments from CSS. |
| [parse-json](https://github.com/sindresorhus/parse-json) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/parse-json            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse JSON with more helpful errors. |
| [URI.js](https://github.com/medialize/URI.js) | [![GitHub stars](https://img.shields.io/github/stars/medialize/URI.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | URL mutation. |
| [PostCSS](https://github.com/postcss/postcss) | [![GitHub stars](https://img.shields.io/github/stars/postcss/postcss            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CSS parser / stringifier. |
| [JSONStream](https://github.com/dominictarr/JSONStream) | [![GitHub stars](https://img.shields.io/github/stars/dominictarr/JSONStream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming JSON.parse and stringify. |
| [csv-parser](https://github.com/mafintosh/csv-parser) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/csv-parser            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming CSV parser that aims to be faster than everyone else. |
| [neat-csv](https://github.com/sindresorhus/neat-csv) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/neat-csv            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Fast CSV parser. Callback interface for the above. |
| [PEG.js](https://github.com/pegjs/pegjs) | [![GitHub stars](https://img.shields.io/github/stars/pegjs/pegjs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple parser generator that produces fast parsers with excellent error reporting. |
| [x-ray](https://github.com/lapwinglabs/x-ray) | [![GitHub stars](https://img.shields.io/github/stars/lapwinglabs/x-ray            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A web scraping utility to see through the <code>&lt;html&gt;</code> noise. |
| [nearley](https://github.com/Hardmath123/nearley) | [![GitHub stars](https://img.shields.io/github/stars/Hardmath123/nearley            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple, fast, powerful parsing for JavaScript. |
| [binary-extract](https://github.com/juliangruber/binary-extract) | [![GitHub stars](https://img.shields.io/github/stars/juliangruber/binary-extract            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Extract a value from a buffer of JSON without parsing the whole thing. |
| [json-mask](https://github.com/nemtsov/json-mask) | [![GitHub stars](https://img.shields.io/github/stars/nemtsov/json-mask            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Tiny language and engine for selecting parts of an object, hiding/masking the rest. |
| [Stylecow](https://github.com/stylecow/stylecow) | [![GitHub stars](https://img.shields.io/github/stars/stylecow/stylecow            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse, manipulate and convert modern CSS to make it compatible with all browsers. Extensible with plugins. |
| [js-yaml](https://github.com/nodeca/js-yaml) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/js-yaml            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Very fast YAML parser. |
| [excel-stream](https://github.com/dominictarr/excel-stream) | [![GitHub stars](https://img.shields.io/github/stars/dominictarr/excel-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming Excel spreadsheet to JSON parser. |
| [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) | [![GitHub stars](https://img.shields.io/github/stars/Leonidas-from-XIV/node-xml2js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | XML to JavaScript object converter. |
| [Jison](http://zaach.github.io/jison/) | not available now | Friendly JavaScript parser generator. It shares genes with Bison, Yacc and family. |
| [google-libphonenumber](https://github.com/seegno/google-libphonenumber) | [![GitHub stars](https://img.shields.io/github/stars/seegno/google-libphonenumber            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Parse, format, store and validate phone numbers. |


### Humanize
|name|star|description|
|----|----|-----------|
| [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pretty-bytes            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert bytes to a human readable string: <code>1337</code> &#x2192; <code>1.34 kB</code>. |
| [pretty-ms](https://github.com/sindresorhus/pretty-ms) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/pretty-ms            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Convert milliseconds to a human readable string: <code>1337000000</code> &#x2192; <code>15d 11h 23m 20s</code>. |
| [ms](https://github.com/rauchg/ms.js) | [![GitHub stars](https://img.shields.io/github/stars/rauchg/ms.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Tiny millisecond conversion utility. |
| [pretty-error](https://github.com/AriaMinaei/pretty-error) | [![GitHub stars](https://img.shields.io/github/stars/AriaMinaei/pretty-error            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Errors with less clutter. |
| [humanize](https://github.com/taijinlee/humanize) | [![GitHub stars](https://img.shields.io/github/stars/taijinlee/humanize            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Data formatter for human readability. |
| [read-art](https://github.com/Tjatse/node-readability) | [![GitHub stars](https://img.shields.io/github/stars/Tjatse/node-readability            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Extract readable content from any page. |


### Compression
|name|star|description|
|----|----|-----------|
| [Archiver](https://github.com/archiverjs/node-archiver) | [![GitHub stars](https://img.shields.io/github/stars/archiverjs/node-archiver            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming interface for archive generation, supporting ZIP and TAR. |
| [decompress-zip](https://github.com/bower/decompress-zip) | [![GitHub stars](https://img.shields.io/github/stars/bower/decompress-zip            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Unzip. |
| [pako](https://github.com/nodeca/pako) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/pako            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | High speed zlib port to pure js (deflate, inflate, gzip). |
| [tar-stream](https://github.com/mafintosh/tar-stream) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/tar-stream            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Streaming tar parser and generator. Also see <a href="https://github.com/mafintosh/tar-fs">tar-fs</a>. |
| [decompress](https://github.com/kevva/decompress) | [![GitHub stars](https://img.shields.io/github/stars/kevva/decompress            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A pluggable decompression module with support for <code>tar</code>, <code>tar.gz</code> and <code>zip</code> files out of the box. |


### Network
|name|star|description|
|----|----|-----------|
| [get-port](https://github.com/sindresorhus/get-port) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/get-port            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get an available port. |
| [ipify](https://github.com/sindresorhus/ipify) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/ipify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get your public IP address. |
| [getmac](https://github.com/bevry/getmac) | [![GitHub stars](https://img.shields.io/github/stars/bevry/getmac            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the computer MAC address. |
| [polo](https://github.com/mafintosh/polo) | [![GitHub stars](https://img.shields.io/github/stars/mafintosh/polo            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Zero-config service discovery. |


### Database Drivers
|name|star|description|
|----|----|-----------|
| [LevelUP](https://github.com/Level/levelup) | [![GitHub stars](https://img.shields.io/github/stars/Level/levelup            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | LevelDB. |
| [MongoDB](https://github.com/mongodb/node-mongodb-native) | [![GitHub stars](https://img.shields.io/github/stars/mongodb/node-mongodb-native            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | MongoDB driver. |
| [PostgreSQL](https://github.com/brianc/node-postgres) | [![GitHub stars](https://img.shields.io/github/stars/brianc/node-postgres            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | PostgreSQL client. Pure JavaScript and native libpq bindings. |
| [MySQL](https://github.com/felixge/node-mysql) | [![GitHub stars](https://img.shields.io/github/stars/felixge/node-mysql            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | MySQL client. |
| [Redis](https://github.com/luin/ioredis) | [![GitHub stars](https://img.shields.io/github/stars/luin/ioredis            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Redis client. |
| [nano](https://github.com/dscape/nano) | [![GitHub stars](https://img.shields.io/github/stars/dscape/nano            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CouchDB client. |
| [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) | [![GitHub stars](https://img.shields.io/github/stars/aerospike/aerospike-client-nodejs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Aerospike client. |


### Database ODM / ORM
|name|star|description|
|----|----|-----------|
| [Bookshelf](http://bookshelfjs.org) | not available now | ORM for PostgreSQL, MySQL and SQLite3 in the style of Backbone.js. |
| [Massive](https://github.com/robconery/massive-js) | [![GitHub stars](https://img.shields.io/github/stars/robconery/massive-js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | PostgreSQL data access tool. |
| [Mongoose](http://mongoosejs.com) | not available now | Elegant MongoDB object modeling. |
| [Sequelize](https://github.com/sequelize/sequelize) | [![GitHub stars](https://img.shields.io/github/stars/sequelize/sequelize            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL. |
| [Waterline](https://github.com/balderdashy/waterline) | [![GitHub stars](https://img.shields.io/github/stars/balderdashy/waterline            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Datastore-agnostic tool that dramatically simplifies interaction with one or more databases. |
| [Iridium](https://github.com/SierraSoftworks/Iridium) | [![GitHub stars](https://img.shields.io/github/stars/SierraSoftworks/Iridium            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A high performance MongoDB ORM with support for promises, distributed caching, preprocessing, validation and plugins. |
| [OpenRecord](https://github.com/PhilWaldmann/openrecord) | [![GitHub stars](https://img.shields.io/github/stars/PhilWaldmann/openrecord            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ORM for PostgreSQL, MySQL, SQLite3 and RESTful datastores. Similar to ActiveRecord. |
| [orm2](https://github.com/dresende/node-orm2) | [![GitHub stars](https://img.shields.io/github/stars/dresende/node-orm2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ORM for PostgreSQL, MariaDB, MySQL, Amazon Redshift, SQLite, MongoDB. |
| [firenze](https://github.com/fahad19/firenze) | [![GitHub stars](https://img.shields.io/github/stars/fahad19/firenze            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Adapter-based ORM for MySQL, Memory, Redis, localStorage and more. |
| [pg-promise](https://github.com/vitaly-t/pg-promise) | [![GitHub stars](https://img.shields.io/github/stars/vitaly-t/pg-promise            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | PostgreSQL framework for native SQL using promises. |
| [Objection.js](https://github.com/Vincit/objection.js) | [![GitHub stars](https://img.shields.io/github/stars/Vincit/objection.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Lightweight ORM built on the SQL query builder Knex. |


### Database Query builder
|name|star|description|
|----|----|-----------|
| [Knex](http://knexjs.org) | not available now | A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use. |


### Database Other
|name|star|description|
|----|----|-----------|
| [NeDB](https://github.com/louischatriot/nedb) | [![GitHub stars](https://img.shields.io/github/stars/louischatriot/nedb            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Embedded persistent database written in JavaScript. |


### Testing
|name|star|description|
|----|----|-----------|
| [AVA](https://ava.li) | not available now | Futuristic test runner. |
| [tap](https://github.com/isaacs/node-tap) | [![GitHub stars](https://img.shields.io/github/stars/isaacs/node-tap            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A TAP test framework. |
| [tape](https://github.com/substack/tape) | [![GitHub stars](https://img.shields.io/github/stars/substack/tape            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | TAP-producing test harness. |
| [Mocha](http://mochajs.org) | not available now | A feature-rich test framework making asynchronous testing simple and fun. |
| [power-assert](https://github.com/power-assert-js/power-assert) | [![GitHub stars](https://img.shields.io/github/stars/power-assert-js/power-assert            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Provides descriptive assertion messages through the standard assert interface. |
| [Mochify](https://github.com/mantoni/mochify.js) | [![GitHub stars](https://img.shields.io/github/stars/mantoni/mochify.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | TDD with Browserify, Mocha, PhantomJS and WebDriver. |
| [trevor](https://github.com/vdemedes/trevor) | [![GitHub stars](https://img.shields.io/github/stars/vdemedes/trevor            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run tests against multiple versions of Node.js without switching versions manually or pushing to Travis CI. |
| [loadtest](https://github.com/alexfernandez/loadtest) | [![GitHub stars](https://img.shields.io/github/stars/alexfernandez/loadtest            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run load tests for your web application, with an API for automation. |
| [istanbul](https://github.com/gotwarlost/istanbul) | [![GitHub stars](https://img.shields.io/github/stars/gotwarlost/istanbul            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. |
| [nyc](https://github.com/bcoe/nyc) | [![GitHub stars](https://img.shields.io/github/stars/bcoe/nyc            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Code coverage tool built on istanbul that works with subprocesses. |
| [Sinon.JS](https://github.com/sinonjs/sinon) | [![GitHub stars](https://img.shields.io/github/stars/sinonjs/sinon            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Test spies, stubs and mocks. |
| [navit](https://github.com/nodeca/navit) | [![GitHub stars](https://img.shields.io/github/stars/nodeca/navit            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | PhantomJS / SlimerJS wrapper to simplify browser test scripting. |
| [nock](https://github.com/pgte/nock) | [![GitHub stars](https://img.shields.io/github/stars/pgte/nock            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | HTTP mocking and expectations. |
| [intern](https://github.com/theintern/intern) | [![GitHub stars](https://img.shields.io/github/stars/theintern/intern            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A next-generation code testing stack for JavaScript. |
| [toxy](https://github.com/h2non/toxy) | [![GitHub stars](https://img.shields.io/github/stars/h2non/toxy            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Hackable HTTP proxy to simulate failure scenarios and network conditions. |
| [hook-std](https://github.com/sindresorhus/hook-std) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/hook-std            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Hook and modify stdout/stderr. |
| [testen](https://github.com/egoist/testen) | [![GitHub stars](https://img.shields.io/github/stars/egoist/testen            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run tests for multiple versions of Node.js locally with NVM. |
| [Nightwatch](https://github.com/nightwatchjs/nightwatch) | [![GitHub stars](https://img.shields.io/github/stars/nightwatchjs/nightwatch            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Automated UI testing framework based on Selenium WebDriver. |
| [WebdriverIO](http://webdriver.io) | not available now | Automated testing based on the WebDriver protocol. |


### Security
|name|star|description|
|----|----|-----------|
| [snyk](https://github.com/Snyk/snyk) | [![GitHub stars](https://img.shields.io/github/stars/Snyk/snyk            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CLI and build-time tool to find &amp; fix vulnerable npm dependencies. |
| [nsp](https://github.com/nodesecurity/nsp) | [![GitHub stars](https://img.shields.io/github/stars/nodesecurity/nsp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CLI tool to identify known vulnerabilities in your project. |
| [RegEx-DoS](https://github.com/jagracey/RegEx-DoS) | [![GitHub stars](https://img.shields.io/github/stars/jagracey/RegEx-DoS            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CLI tool to identify possible regex denial of service (ReDos) vulnerabilities in your project. |


### Benchmarking
|name|star|description|
|----|----|-----------|
| [Benchmark.js](http://benchmarkjs.com) | not available now | A robust benchmarking library that works on nearly all JavaScript platforms, supports high-resolution timers, and returns statistically significant results. |
| [matcha](https://github.com/logicalparadox/matcha) | [![GitHub stars](https://img.shields.io/github/stars/logicalparadox/matcha            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A caffeine-driven, simplistic approach to benchmarking. |


### Minifiers
|name|star|description|
|----|----|-----------|
| [UglifyJS2](http://lisperator.net/uglifyjs/) | not available now | JavaScript minifier. |
| [clean-css](https://github.com/jakubpawlowicz/clean-css) | [![GitHub stars](https://img.shields.io/github/stars/jakubpawlowicz/clean-css            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | CSS minifier. |
| [minimize](https://github.com/Swaagie/minimize) | [![GitHub stars](https://img.shields.io/github/stars/Swaagie/minimize            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | HTML minifier. |
| [imagemin](https://github.com/imagemin/imagemin) | [![GitHub stars](https://img.shields.io/github/stars/imagemin/imagemin            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Image minifier. |


### Authentication
|name|star|description|
|----|----|-----------|
| [Passport](http://passportjs.org) | not available now | Simple, unobtrusive authentication. |
| [everyauth](https://github.com/bnoguchi/everyauth) | [![GitHub stars](https://img.shields.io/github/stars/bnoguchi/everyauth            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Authentication and authorization (password, Facebook, etc) for your Connect and Express apps. |
| [passwordless](https://passwordless.net) | not available now | Token-based authentication middleware for Express allowing authentication without passwords. |
| [Lockit](https://github.com/zemirco/lockit) | [![GitHub stars](https://img.shields.io/github/stars/zemirco/lockit            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Full featured authentication solution for Express. Supports a variety of databases, predefined routes, email and two-factor authentication. |
| [Grant](https://github.com/simov/grant) | [![GitHub stars](https://img.shields.io/github/stars/simov/grant            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | OAuth middleware for Express, Koa, and Hapi. |


### Email
|name|star|description|
|----|----|-----------|
| [Nodemailer](https://github.com/andris9/Nodemailer) | [![GitHub stars](https://img.shields.io/github/stars/andris9/Nodemailer            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | The fastest way to handle email. |
| [emailjs](https://github.com/eleith/emailjs) | [![GitHub stars](https://img.shields.io/github/stars/eleith/emailjs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Send text/HTML emails with attachments to any SMTP server. |


### Job queues
|name|star|description|
|----|----|-----------|
| [kue](https://github.com/Automattic/kue) | [![GitHub stars](https://img.shields.io/github/stars/Automattic/kue            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Priority job queue backed by Redis. |
| [bull](https://github.com/OptimalBits/bull) | [![GitHub stars](https://img.shields.io/github/stars/OptimalBits/bull            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Persistent job and message queue. |


### Node.js management
|name|star|description|
|----|----|-----------|
| [n](https://github.com/tj/n) | [![GitHub stars](https://img.shields.io/github/stars/tj/n            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js version management. |
| [nave](https://github.com/isaacs/nave) | [![GitHub stars](https://img.shields.io/github/stars/isaacs/nave            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Virtual Environments for Node.js. |
| [nodeenv](https://github.com/ekalinin/nodeenv) | [![GitHub stars](https://img.shields.io/github/stars/ekalinin/nodeenv            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A Node.js virtual environment compatible to Python&apos;s virtualenv. |
| [nvm for Windows](https://github.com/coreybutler/nvm-windows) | [![GitHub stars](https://img.shields.io/github/stars/coreybutler/nvm-windows            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Version management for Windows. |


### Polyfills Node.js
|name|star|description|
|----|----|-----------|
| [set-immediate-shim](https://github.com/sindresorhus/set-immediate-shim) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/set-immediate-shim            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Simple <code>setImmediate()</code> ponyfill. |
| [path-is-absolute](https://github.com/sindresorhus/path-is-absolute) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/path-is-absolute            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>path.isAbsolute()</code> ponyfill. |
| [os-tmpdir](https://github.com/sindresorhus/os-tmpdir) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/os-tmpdir            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js <code>os.tmpdir()</code> ponyfill. |
| [os-homedir](https://github.com/sindresorhus/os-homedir) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/os-homedir            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 4 <code>os.homedir()</code> ponyfill. |
| [user-info](https://github.com/sindresorhus/user-info) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/user-info            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 6 <code>os.userInfo()</code> ponyfill. |
| [debug-log](https://github.com/sindresorhus/debug-log) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/debug-log            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>util.debuglog()</code> ponyfill. |
| [buffer-equals](https://github.com/sindresorhus/buffer-equals) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/buffer-equals            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>buffer.equals()</code> ponyfill. |
| [buffer-includes](https://github.com/sindresorhus/buffer-includes) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/buffer-includes            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 5.3 <code>buffer.includes()</code> ponyfill. |
| [buf-indexof](https://github.com/sindresorhus/buf-indexof) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/buf-indexof            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 4 <code>buffer.indexOf()</code> ponyfill. |
| [buf-compare](https://github.com/sindresorhus/buf-compare) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/buf-compare            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>Buffer.compare()</code> ponyfill. |
| [fs-access](https://github.com/sindresorhus/fs-access) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/fs-access            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>fs.access()</code> &amp; <code>fs.accessSync()</code> ponyfill. |
| [exec-file-sync](https://github.com/sindresorhus/exec-file-sync) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/exec-file-sync            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>childProcess.execFileSync()</code> ponyfill. |
| [child-process-ctor](https://github.com/sindresorhus/child-process-ctor) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/child-process-ctor            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 4 <code>childProcess.ChildProcess</code> ponyfill. |
| [node-status-codes](https://github.com/sindresorhus/node-status-codes) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/node-status-codes            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js <code>http.STATUS_CODES</code> ponyfill. |
| [exit-code](https://github.com/isaacs/exit-code) | [![GitHub stars](https://img.shields.io/github/stars/isaacs/exit-code            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js 0.12 <code>process.exitCode</code> polyfill. |
| [core-assert](https://github.com/sindresorhus/core-assert) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/core-assert            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Node.js <code>assert</code> as a standalone module. |
| [deep-strict-equal](https://github.com/sindresorhus/deep-strict-equal) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/deep-strict-equal            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Test for deep equality - Node.js <code>assert.deepStrictEqual()</code> algorithm as a standalone module. |


### Polyfills JavaScript
|name|star|description|
|----|----|-----------|
| [object-assign](https://github.com/sindresorhus/object-assign) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/object-assign            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ES2015 <code>Object.assign()</code> ponyfill. |
| [pinkie-promise](https://github.com/floatdrop/pinkie-promise) | [![GitHub stars](https://img.shields.io/github/stars/floatdrop/pinkie-promise            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ES2015 <code>Promise</code> ponyfill. |
| [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) | [![GitHub stars](https://img.shields.io/github/stars/tvcutsem/harmony-reflect            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ES2015 <code>Reflect</code> and <code>Proxy</code> polyfill. |
| [es6-shim](https://github.com/paulmillr/es6-shim) | [![GitHub stars](https://img.shields.io/github/stars/paulmillr/es6-shim            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Collection of ES2015 polyfills. |
| [es6-tools](https://github.com/addyosmani/es6-tools#polyfills) | [![GitHub stars](https://img.shields.io/github/stars/addyosmani/es6-tools#polyfills            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | More ES2015 polyfills at . |


### Natural language processing
|name|star|description|
|----|----|-----------|
| [retext](https://github.com/wooorm/retext) | [![GitHub stars](https://img.shields.io/github/stars/wooorm/retext            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | An extensible natural language system. |
| [franc](https://github.com/wooorm/franc) | [![GitHub stars](https://img.shields.io/github/stars/wooorm/franc            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Detect the language of text. |
| [leven](https://github.com/sindresorhus/leven) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/leven            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Measure the difference between two strings using the Levenshtein distance algorithm. |
| [natural](https://github.com/NaturalNode/natural) | [![GitHub stars](https://img.shields.io/github/stars/NaturalNode/natural            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A general natural language facility. |


### Process management
|name|star|description|
|----|----|-----------|
| [PM2](https://github.com/Unitech/pm2) | [![GitHub stars](https://img.shields.io/github/stars/Unitech/pm2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Advanced Process Manager. |
| [node-windows](https://github.com/coreybutler/node-windows) | [![GitHub stars](https://img.shields.io/github/stars/coreybutler/node-windows            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run scripts as a native Windows service and log to the Event viewer. |
| [node-mac](https://github.com/coreybutler/node-mac) | [![GitHub stars](https://img.shields.io/github/stars/coreybutler/node-mac            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run scripts as a native Mac daemon and log to the console app. |
| [node-linux](https://github.com/coreybutler/node-linux) | [![GitHub stars](https://img.shields.io/github/stars/coreybutler/node-linux            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Run scripts as native system service and log to syslog. |
| [forever](https://github.com/foreverjs/forever) | [![GitHub stars](https://img.shields.io/github/stars/foreverjs/forever            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A simple CLI tool for ensuring that a given script runs continuously (i.e. forever). |
| [nodemon](https://github.com/remy/nodemon) | [![GitHub stars](https://img.shields.io/github/stars/remy/nodemon            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Monitor for changes in your app and automatically restart the server. |
| [supervisor](https://github.com/petruisfan/node-supervisor) | [![GitHub stars](https://img.shields.io/github/stars/petruisfan/node-supervisor            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Restart scripts when they crash or restart when a <code>*.js</code> file changes. |
| [Phusion Passenger](https://www.phusionpassenger.com/node_weekly) | not available now | Friendly process manager that integrates directly into Nginx. |
| [naught](https://github.com/andrewrk/naught) | [![GitHub stars](https://img.shields.io/github/stars/andrewrk/naught            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Process manager with zero downtime deployment. |


### Automation
|name|star|description|
|----|----|-----------|
| [robotjs](https://github.com/octalmage/robotjs) | [![GitHub stars](https://img.shields.io/github/stars/octalmage/robotjs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Desktop Automation: control the mouse, keyboard and read the screen. |


### AST
|name|star|description|
|----|----|-----------|
| [Acorn](https://github.com/ternjs/acorn) | [![GitHub stars](https://img.shields.io/github/stars/ternjs/acorn            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A tiny, fast JavaScript parser. |
| [Rocambole](https://github.com/millermedeiros/rocambole) | [![GitHub stars](https://img.shields.io/github/stars/millermedeiros/rocambole            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Recursively walk and transform JavaScript AST. |


### Static site generators
|name|star|description|
|----|----|-----------|
| [Metalsmith](http://www.metalsmith.io) | not available now | An extremely simple, pluggable static site generator. |
| [Wintersmith](http://wintersmith.io) | not available now | Flexible, minimalistic, multi-platform static site generator. |
| [Assemble](http://assemble.io) | not available now | Static site generator for Node.js, Grunt.js, and Yeoman. |
| [DocPad](https://github.com/docpad/docpad) | [![GitHub stars](https://img.shields.io/github/stars/docpad/docpad            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Static site generator with dynamic abilities and huge plugin ecosystem. |


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
| [superb](https://github.com/sindresorhus/superb) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/superb            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get superb like words. |
| [cat-names](https://github.com/sindresorhus/cat-names) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/cat-names            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get popular cat names. |
| [dog-names](https://github.com/sindresorhus/dog-names) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/dog-names            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get popular dog names. |
| [superheroes](https://github.com/sindresorhus/superheroes) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/superheroes            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get superhero names. |
| [supervillains](https://github.com/sindresorhus/supervillains) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/supervillains            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get supervillain names. |
| [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/cool-ascii-faces            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get some cool ascii faces. |
| [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) | [![GitHub stars](https://img.shields.io/github/stars/melaniecebula/cat-ascii-faces            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | &#x208D;&#x2C4;&#xB7;&#x348;&#xF1D;&#xB7;&#x348;&#x2C4;&#x208E;&#x25DE; &#x311;&#x311;&#xDC6;&#x20DB; (=&#x2180;&#x3C9;&#x2180;=)&#x2727; (^&#xFF65;o&#xFF65;^)&#xFF89;&#x201D; |
| [cows](https://github.com/sindresorhus/cows) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/cows            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | ASCII cows. |


### Miscellaneous
|name|star|description|
|----|----|-----------|
| [execa](https://github.com/sindresorhus/execa) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/execa            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A better <code>child_process</code>. |
| [cheerio](https://github.com/cheeriojs/cheerio) | [![GitHub stars](https://img.shields.io/github/stars/cheeriojs/cheerio            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Fast, flexible, and lean implementation of core jQuery designed specifically for the server. |
| [Electron](https://github.com/atom/electron) | [![GitHub stars](https://img.shields.io/github/stars/atom/electron            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Build cross platform desktop apps with web technologies. <em>(You might like <a href="https://github.com/sindresorhus/awesome-electron">awesome-electron</a>)</em> |
| [opn](https://github.com/sindresorhus/opn) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/opn            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Opens stuff like websites, files, executables. |
| [hasha](https://github.com/sindresorhus/hasha) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/hasha            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Hashing made simple. Get the hash of a buffer/string/stream/file. |
| [dot-prop](https://github.com/sindresorhus/dot-prop) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/dot-prop            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get a property from a nested object using a dot path. |
| [onetime](https://github.com/sindresorhus/onetime) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/onetime            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Only run a function once. |
| [mem](https://github.com/sindresorhus/mem) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/mem            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Memoize functions - an optimization technique used to speed up consecutive function calls by caching the result of calls with identical input. |
| [require-uncached](https://github.com/sindresorhus/require-uncached) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/require-uncached            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Require a module bypassing the cache. |
| [stringify-object](https://github.com/yeoman/stringify-object) | [![GitHub stars](https://img.shields.io/github/stars/yeoman/stringify-object            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Stringify an object/array like JSON.stringify just without all the double-quotes. |
| [strip-bom](https://github.com/sindresorhus/strip-bom) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/strip-bom            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Strip UTF-8 byte order mark (BOM) from a string/buffer/stream. |
| [deep-assign](https://github.com/sindresorhus/deep-assign) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/deep-assign            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Recursive <code>Object.assign()</code>. |
| [os-locale](https://github.com/sindresorhus/os-locale) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/os-locale            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the system locale. |
| [nan](https://github.com/nodejs/nan) | [![GitHub stars](https://img.shields.io/github/stars/nodejs/nan            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A header file filled with macro and utility goodness for making add-on development for across Node.js versions easier. |
| [multiline](https://github.com/sindresorhus/multiline) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/multiline            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Multiline strings in JavaScript. |
| [ssh2](https://github.com/mscdex/ssh2) | [![GitHub stars](https://img.shields.io/github/stars/mscdex/ssh2            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | An SSH2 client and server module. |
| [adit](https://github.com/markelog/adit) | [![GitHub stars](https://img.shields.io/github/stars/markelog/adit            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | SSH tunneling made simple. |
| [lazy-req](https://github.com/sindresorhus/lazy-req) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/lazy-req            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Require modules lazily. |
| [file-type](https://github.com/sindresorhus/file-type) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/file-type            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Detect the file type of a Buffer. |
| [Bottleneck](https://github.com/SGrondin/bottleneck) | [![GitHub stars](https://img.shields.io/github/stars/SGrondin/bottleneck            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A powerful rate limiter that makes throttling easy. |
| [webworker-threads](https://github.com/audreyt/node-webworker-threads) | [![GitHub stars](https://img.shields.io/github/stars/audreyt/node-webworker-threads            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Lightweight Web Worker API implementation with native threads. |
| [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) | [![GitHub stars](https://img.shields.io/github/stars/mapbox/node-pre-gyp            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Makes it easy to publish and install Node.js C++ addons from binaries. |
| [opencv](https://github.com/peterbraden/node-opencv) | [![GitHub stars](https://img.shields.io/github/stars/peterbraden/node-opencv            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Bindings for OpenCV. The defacto computer vision library. |
| [common-errors](https://github.com/shutterstock/node-common-errors) | [![GitHub stars](https://img.shields.io/github/stars/shutterstock/node-common-errors            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Common error classes and utility functions. |
| [agenda](https://github.com/rschmukler/agenda) | [![GitHub stars](https://img.shields.io/github/stars/rschmukler/agenda            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Lightweight job scheduling on MongoDB. |
| [dotenv](https://github.com/motdotla/dotenv) | [![GitHub stars](https://img.shields.io/github/stars/motdotla/dotenv            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Load environment variables from .env file. |
| [remote-git-tags](https://github.com/sindresorhus/remote-git-tags) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/remote-git-tags            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get tags from a remote git repo. |
| [semver](https://github.com/npm/node-semver) | [![GitHub stars](https://img.shields.io/github/stars/npm/node-semver            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | <a href="http://semver.org">semver</a> parser. |
| [nar](https://github.com/h2non/nar) | [![GitHub stars](https://img.shields.io/github/stars/h2non/nar            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Create self-contained executable binaries. |
| [banshee](https://github.com/eleme/banshee) | [![GitHub stars](https://img.shields.io/github/stars/eleme/banshee            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Real-time anomalies detection for periodic time series. |
| [Faker.js](https://github.com/Marak/Faker.js) | [![GitHub stars](https://img.shields.io/github/stars/Marak/Faker.js            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Generate massive amounts of fake data. |
| [nodegit](https://github.com/nodegit/nodegit) | [![GitHub stars](https://img.shields.io/github/stars/nodegit/nodegit            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Native bindings to Git. |
| [json-strictify](https://github.com/pigulla/json-strictify) | [![GitHub stars](https://img.shields.io/github/stars/pigulla/json-strictify            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Safely serialize a value to JSON without data loss or going into an infinite loop. |
| [parent-module](https://github.com/sindresorhus/parent-module) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/parent-module            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Get the path of the parent module. |
| [resolve-from](https://github.com/sindresorhus/resolve-from) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/resolve-from            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Resolve the path of a module like <code>require.resolve()</code> but from a given path. |
| [simplecrawler](https://github.com/cgiffard/node-simplecrawler) | [![GitHub stars](https://img.shields.io/github/stars/cgiffard/node-simplecrawler            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Event driven web crawler. |
| [jsdom](https://github.com/tmpvar/jsdom) | [![GitHub stars](https://img.shields.io/github/stars/tmpvar/jsdom            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | JavaScript implementation of HTML and the DOM. |
| [hypernova](https://github.com/airbnb/hypernova) | [![GitHub stars](https://img.shields.io/github/stars/airbnb/hypernova            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | A service for server-side rendering your JavaScript views. |


### Tutorials
|name|star|description|
|----|----|-----------|
| [Nodeschool](http://nodeschool.io) | not available now | Learn Node.js with interactive lessons. |
| [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) | [![GitHub stars](https://img.shields.io/github/stars/maxogden/art-of-node/#the-art-of-node            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | An introduction to Node.js. |
| [stream-handbook](https://github.com/substack/stream-handbook) | [![GitHub stars](https://img.shields.io/github/stars/substack/stream-handbook            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | How to write Node.js programs with streams. |
| [browserify-handbook](https://github.com/substack/browserify-handbook) | [![GitHub stars](https://img.shields.io/github/stars/substack/browserify-handbook            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | The definitive guide for browserify. |
| [module-best-practices](https://github.com/mattdesl/module-best-practices) | [![GitHub stars](https://img.shields.io/github/stars/mattdesl/module-best-practices            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Some good practices when writing new npm modules. |
| [The Node Way](http://thenodeway.io) | not available now | &#x2014; An entire philosophy of Node.js best practices and guiding principles exists for writing maintainable modules, scalable applications, and code that is actually pleasant to read. |
| [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) | [![GitHub stars](https://img.shields.io/github/stars/azat-co/you-dont-know-node            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Introduction to Node.js core features and asynchronous JavaScript. |


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
| [Node Interactive 2015](https://github.com/duffn/nodeinteractive-2015) | [![GitHub stars](https://img.shields.io/github/stars/duffn/nodeinteractive-2015            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | List of talks, keynotes and panels from the 2015 Node Interactive conference. |


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
| [Express.js](https://github.com/azat-co/cheatsheets/blob/master/express4) | [![GitHub stars](https://img.shields.io/github/stars/azat-co/cheatsheets/blob/master/express4            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() |  |
| [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) | [![GitHub stars](https://img.shields.io/github/stars/stephenplusplus/stream-faqs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Answering common questions about streams, covering pagination, events, and more. |


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
| [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/node-module-boilerplate            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Boilerplate to kickstart creating a node module. |
| [generator-nm](https://github.com/sindresorhus/generator-nm) | [![GitHub stars](https://img.shields.io/github/stars/sindresorhus/generator-nm            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Scaffold out a node module. |
| [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) | [![GitHub stars](https://img.shields.io/github/stars/bcoe/awesome-cross-platform-nodejs            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]() | Resources for writing and testing cross-platform code. |



## LICENSE

### the `awesome-nodejs` project LICENSE

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, [Sindre Sorhus](http://sindresorhus.com) has waived all copyright and related or neighboring rights to this work.

### the star generate code LICENSE
the MIT LICENSE
