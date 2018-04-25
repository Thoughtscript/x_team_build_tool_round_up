import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'reactAppSrc/index.js',
  output: {
    file: 'public/built/bundle.min.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['es2015', {modules: false}], 'stage-0', 'react'],
      plugins: ['external-helpers']
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
      extensions: ['.js', '.jsx'],
    }),
    nodeResolve({
      browser: true,
      main: true
    })
  ]
}