const common = require('./webpack.common')

module.exports = {
  module: {
    loaders: [
      common.jsLoader,
      common.hbsLoader,
      common.sassLoader
    ]
  }
}
