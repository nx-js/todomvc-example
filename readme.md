# [TodoMVC](http://todomvc.com) example

**This is a fully [spec compliant](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality) TodoMVC example - written in NX.**

It is built without a bundler, using old school script
and link tags only. If you are interested in a larger bundled app, check out the
[Intro app](https://github.com/nx-js/intro-example) or the [Hacker News clone](https://github.com/nx-js/hackernews-example).

## Usage

Clone the repo and run `npm i` and `npm start`. The `npm start` command bundles
the source and starts a local server. The demo is exposed on `localhost:3000`.

## Project structure

The project is structured in the following way.

  - The [static](/static) folder includes the static assets of the app. These include
    the standard TodoMVC scripts and styles and the NX framework.
  - [index.html](/index.html) contains the whole view of the app. It imports all of
    the static assets and components with `script` and `link` tags.
  - The [components](/components) folder includes the logic of the components.
  - [server.js](/server.js) is only used for local testing, as the page is hosted on
    Github Pages. It serves as a simple server example for single page applications.
