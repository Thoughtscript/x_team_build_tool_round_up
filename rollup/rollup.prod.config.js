import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'reactAppSrc/rollup.index.js',
  dest: 'public/built/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        "react",

        [
          "es2015",
          {
            "modules": false
          }
        ]
      ],
      "plugins": [
        "external-helpers"
      ]
    }),
    uglify()
  ],
};