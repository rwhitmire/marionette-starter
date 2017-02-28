const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./common')

module.exports = {
  entry: {

    /**
     * Register any modules you want included in the vendor bundle here.
     */

    vendor: [
      'backbone',
      'backbone.marionette',
      'backbone.syphon',
      'bootstrap',
      'handlebars/runtime',
      'jquery',
      'jquery-validation',
      'tether',
      'underscore'
    ],

    main: common.entry
  },

  output: {
    path: common.outputPath,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      common.jsLoader,
      common.hbsLoader,

      /**
       * Implement sass loader to extract
       * text into a separate css file
       */

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
            {
              loader: 'postcss-loader',
              options: common.postCssOptions
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  /**
   * The idea behind much of this configuration is that we want to decouple
   * vendor modules from application modules so vendor modules can remain
   * cached at the browser while application modules are updated regularly.
   *
   * For information:
   * https://webpack.js.org/guides/caching/#generating-unique-hashes-for-each-file
   */

  plugins: [
    new ExtractTextPlugin('css/styles.[chunkhash:8].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),

    new webpack.HashedModuleIdsPlugin(),

    new WebpackChunkHash(),

    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest'
    }),

    common.providePlugin,

    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        warnings: false
      }
    }),

    common.copyWebpackPlugin,

    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}
