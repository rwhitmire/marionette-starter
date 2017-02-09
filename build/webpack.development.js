const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')

module.exports = {
  entry: common.entry,

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '..', 'dist'),
    open: true,
    port: 4000,
    noInfo: true
  },

  module: {
    loaders: [
      common.jsLoader,
      common.hbsLoader,
      common.sassLoader
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // displays error messages in the browser

    common.providePlugin,

    common.copyWebpackPlugin,

    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      inject: true
    })
  ]
}
