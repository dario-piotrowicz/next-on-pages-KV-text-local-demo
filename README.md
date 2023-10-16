# next-on-pages KV and text bindings local demo

The app contains a single route that shows the usage of a KV binding and text binding in local mode.

> **Note**
> This is also an example on how the two can be used together with server actions to update KV values
> based on secrets that never make it into the browser

## Steps to run the app

Install dependencies:
```
$ npm i
```

Then to run the app using `next dev` (with the [next-dev](https://github.com/cloudflare/next-on-pages/pull/486) implemented using Miniflare's magic proxy):
```
$ npm run dev
```

To instead run the application using `wrangler`, start by building the worker:
```
$ npm run pages:build
```
(or `pages:build:watch` for building in watch mode)
and then run:
```
$ npm run pages:dev
```
