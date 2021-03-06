'use strict'
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const LibWebpackConfig = Object.assign(baseWebpackConfig, {
  entry: {
    vov: './src/index.js'
  },
  output: {
    filename: './lib/[name].js',
    library: 'vov',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    })
  ]
})

module.exports = LibWebpackConfig
