# parcel2-scope-hoisting-bug

This repo contains several packages the help test an issue with scope-hoisting that affects recent builds of parcel2. To get started, run `yarn` and `yarn build`, and then you can see the issue in several contexts:

1. **parcel-repro-real** - this package shows this issue in a real-life situation (importing and using things from the `@fluentui/react` package). You can see it by running `yarn real serve` after building to see output `http://localhost:8080`.

2. **parcel-repro-simple** - this is my attempt at getting the simplest possible repro of the underlying problem. It involves importing something from `simple-dependency`, which in turn imports other things from `simple-dependency2`. Both packages involve a few `export * from x` lines, and a very specific `sideEffects` config. This mirrors what `@fluentui/react` is doing under the hood with all the cruft removed. You can see it by running `parcel real serve` after building to see output `http://localhost:8080`.

3. **webpack-test** - this tries to build the same app as #2, but with webpack. I can verify that (somehow) it works.
