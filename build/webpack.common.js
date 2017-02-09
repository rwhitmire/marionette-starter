const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const postCssOptions = {
  plugins () {
    return [
      require('autoprefixer')
    ]
  }
}

module.exports = {
  entry: './src',

  outputPath: path.resolve(__dirname, '..', 'dist'),

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015']
    }
  },

  hbsLoader: {
    test: /\.hbs$/,
    loader: 'handlebars-loader',
    query: {
      helperDirs: [
        path.resolve(__dirname, '..', 'src', 'helpers')
      ]
    }
  },

  sassLoader: {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader?importLoaders=1',
      {
        loader: 'postcss-loader',
        options: postCssOptions
      },
      'sass-loader'
    ]
  },

  postCssOptions: postCssOptions,

  providePlugin: new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.jQuery': 'jquery',
    'Tether': 'tether'
  }),

  copyWebpackPlugin: new CopyWebpackPlugin([{
    context: 'src/assets',
    from: '**/*'
  }])
}
