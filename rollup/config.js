import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default (mode) => ({
  input: 'reactAppSrc/index.js',
  output: {
    file: 'public/built/main.min.js',
	format: 'iife',
	sourcemap: mode === 'development'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
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
    commonjs({
      namedExports: {
        'react': ['Children', 'Component', 'createElement']
      }
	}),
	mode === 'production' && uglify()
  ],
});