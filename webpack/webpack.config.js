'use strict'

const path = require('path')

module.exports = {
  mode: 'production',
  entry: './app/entry',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'app/demo-files')
        ],
        issuer: {test, include, exclude},
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },

      {
        test: /\.html$/,
        use: [
          'htmllint-loader',
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
    ]

  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devtool: 'source-map',
  context: __dirname,
  externals: ['react'],
  devServer: {
    proxy: { //
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true, //
    hot: true,
    https: false,
    noInfo: true
  },
  plugins: []
}