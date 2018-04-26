'use strict'

const path = require('path'),
  webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './reactAppSrc/index.js',
  output: {
    path: path.resolve(__dirname, '../public/built/'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
}