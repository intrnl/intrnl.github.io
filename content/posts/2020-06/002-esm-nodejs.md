---
title: ESM in Node.js is still full of landmines
description: And how we can do our parts to fix it
date: 2020-06-06
---

I can't tell how long I've been waiting for ES Modules support to hit Node.js,
and when Node.js 13.2.0 finally unflagged the experimental support, I was
pretty excited for the future where we're no longer bound to using CommonJS.

Except I've forgotten all about it.

Recently, I published several packages to NPM, which I also use in my projects,
both public and private. They all use ES Modules, with no transformation step
done before publishing, it's only using the `type` field of `package.json` to
let Node.js know that it's an ES Module package. I've been thinking that I
should add unit testing to them too so I don't have any worries about
accidentally breaking stuff, but here's where it hits me.

As of the writing of this post, there hasn't been any test runners that fully
supports ES Modules in Node.js.

Not only that, I've realized that my code doesn't exactly work on Node.js
either because it does not use the widely used `module` field of `package.json`
that most packages use. So it would import the CommonJS version of the package,
and throws an error because you can't use named imports on them.

This isn't something that Node.js committee can fix by themselves, they also
need our help to do our parts as well.

## How we can fix it

To mark an entire package as being fully written in ESM, you know full well
from above that you can set the `type` field to `module`.

```json
{
  "name": "awesome-library",
  "type": "module"
}
```

This should be fine for most packages, however it comes with a downside where
older Node.js versions can't actually use them.

However, if you have a transformation step going, you can use the `exports`
field instead to indicate that there are multiple versions of the same entry
points.

```json
{
  "exports": {
    ".": {
      "require": "./dist/cjs/awesome-library.js",
      "import": "./dist/module/awesome-library.js"
    },
    "./submodule": {
      "require": "./dist/cjs/submodule/index.js",
      "import": "./dist/module/submodule/index.js"
    }
  }
}
```

As with anything, this also comes with a downside with end users not being able
to poke around random files on the library, which might not be bad, but it
comes off as a breaking change for them.

To remedy that, you are able the directories that your end users can use.

```json
{
  "exports": {
    "./lib": "./lib/index.js",
    "./lib/": "./lib/"
}
```

## Conclusion

The morale of the story? Avoid using experimental features whenever you can,
but if I were to be honest, if we always avoid them, then we can't provide the
actual opinion and feedback that can be used to make that feature better, and
hopefully make them suitable for production usage.
