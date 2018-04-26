# Parcel Configuration

`Parcel` is largely auto-configured and does not require an independent configuration file.

# Build

The core difference here from `webpack 4` is that we directly set the `index.js` file as a `script.scr` rather than the compiled bundle.

In other words:
```html
    <script src="../reactAppSrc/index.js"></script>
```
rather than what we'd normally do with `webpack`:
```html
    <script src="built/vendor.min.js"></script>
    <script src="built/built.min.js"></script>
```

We can then run the following command to transpile our dependencies:
```json
    $ parcel index.html
```
For `production` builds:
```json
	$ parcel build public/parcel.index.html
```