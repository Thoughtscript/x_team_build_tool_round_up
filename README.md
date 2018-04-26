# x_team_build_tool_round_up

X-Team Rollup v Webpack v Parcel comparison!

# Build Tool Show Down

We'll build a simple React app that's got simple implementations of all the basics:
```
    1.  React Router v4
    2.  React Redux
    3.  React 16.2.x
```

The exact `package.json` dependencies for our build tools:

Shared `babel` dependencies:
```json
    "babel-loader": "=7.1.4",
    "babel-plugin-external-helpers": "=6.22.0",
    "babel-preset-env": "=1.6.1",
    "babel-preset-react": "=6.24.1",
    "babel-preset-stage-0": "=6.24.1"
```

`parcel` dependencies:
```json
    "parcel-bundler": "=1.7.1"
```

`rollup` dependencies:
```json
    "rollup": "=0.58.2",
    "rollup-plugin-babel": "=3.0.4",
    "rollup-plugin-uglify": "=3.0.0"
```

`webpack` dependencies:
```json
    "webpack": "=4.6.0",
    "webpack-cli": "=2.0.15"
```

Each build tool's configuration is seperated into independent directories!

# Battle of the Builds

We'll be comparing *build time* for `development` and `production` and additional features:

```bash
    $ npm run build-parcel
    $ npm run build-webpack
    $ npm run build-rollup
```

# Testing

All three testing libraries were tested and built on the following Dell 15 <a href="https://pilot.search.dell.com/laptops/xps">XPS</a> 2016 with specs:

```
    Intel Core i7-6700HQ Quad-Core (8 Logical Cores) at 2.60 GHz
    32 GB RAM
    Windows 10 Pro + Linux Subsystem and Cygwin
    NVIDIA 960M GPU
    256GB m2 PCIe SSD
    15.6" FHD Screen
```

Results divided into `production` and `development` modes:

<table>
    <thead>
        <tr>
            <th>Tool</th>
            <th>Dev Build Time One</th>
            <th>Dev Build Time Two</th>
            <th>Dev Build Time Three</th>
            <th>Dev Build Time Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Parcel</th>
            <th>14.92 s</th>
            <th>5.22 s</th>
            <th>4.36 s</th>
            <th>8.16 avg s</th>
        </tr>
        <tr>
            <th>Rollup</th>
            <th>0.570 s</th>
            <th>0.482 s</th>
            <th>0.487 s</th>
            <th>0.513 avg s</th>
        </tr>
        <tr>
            <th>Webpack</th>
            <th>3.608 s</th>
            <th>3.328 s</th>
            <th>3.844 s</th>
            <th>3.59 avg s</th>
        </tr>
    </tbody>
</table>

`Production` mode:

<table>
    <thead>
        <tr>
            <th>Tool</th>
            <th>Prod Build Time One</th>
            <th>Prod Build Time Two</th>
            <th>Prod Build Time Three</th>
            <th>Prod Build Time Avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Parcel</th>
            <th>738.509 s</th>
            <th>35.364 s</th>
            <th>35.592 s</th>
            <th>269.82 avg s</th>
        </tr>
        <tr>
            <th>Rollup</th>
            <th>0.712 s</th>
            <th>0.665 s</th>
            <th>0.714 s</th>
            <th>0.697 avg s</th>
        </tr>
        <tr>
            <th>Webpack</th>
            <th>3.636 s</th>
            <th>3.805 s</th>
            <th>4.305 s</th>
            <th>3.915 avg s</th>
        </tr>
    </tbody>
</table>

### Other Considerations

Above, we compare raw build time alone but there are several other highly relevant considerations:

1. `Parcel`'s caching feature sees dramatically decreases in time consumption after the initial run. For frequent, small changes, in smaller projects `Parcel` is a great choice.
2. `Rollup` provides much simpler configuration over `webpack 4` and has a host of pre-configured plugins that are a breeze to incorporate into your project. `Rollup`'s also the fastest of the build tools **period**. 
3. `Rollup` also provides convient *source maps* which can aid in debugging.
4. `webpack 4` has gotten a lot easier to use and particularly through the convenient `mode` attribute (which will enforce *minification* when set to 'production' automatically now).

### Takeaway

Overall, `Parcel`'s a fantastic choice for small projects since it's requires *zero* configuration. 

`Rollup` represents the next generation of build tools and is lightning fast with easy configuration. 

`webpack 4` represents a great improvement in the tradition of a tried and true universal build-tool workhorse. It's also largely interchangeable with `webpack 3` configuration which simplifies migration.

# Shout Outs and Great Resources

https://parceljs.org/

https://webpack.js.org/

https://code.lengstorf.com/learn-rollup-js/
