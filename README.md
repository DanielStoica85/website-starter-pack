# Website Starter Pack

## Gulp build system with PostCss, Sass, Uglify and imageMin

> A starter pack for automating build processes.

## Setup

### Requirements

* Node (which can be installed from [here] (http://nodejs.org/download/)) and already includes [npm](https://www.npmjs.com/get-npm)
* Global installation of [gulp](https://gulpjs.com/), a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something:
```bash
npm install -g gulp
```

### Clone this repository
```bash
git clone git@github.com:DanielStoica85/website-starter-pack.git
```

### Install npm dependencies

```bash
npm install
```

And you're all set!

### List of available tasks

#### `gulp copyHtml`
Copy html files from `src` folder to `dist` folder.

#### `gulp imageMin`
Optimize image sizes.

#### `gulp concatJs`
Combine JS files & uglify the output.

#### `gulp css`
Compile Sass to CSS, add vendor prefixes and minify CSS files.

#### `gulp watch`
Watch for HTML, CSS or JS file changes.

#### `gulp default` or just `gulp`
Run a production build with the following tasks: `copyHtml`, `imageMin`, `css`, `concatJs`.

----

> When using this workflow, `dist` will be the production folder!
