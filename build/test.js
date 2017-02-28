const common = require('./common')

module.exports = {
  module: {
    loaders: [
      common.jsLoader,
      common.hbsLoader,
      common.sassLoader
    ]
  }
}
