module.exports = {
  'env': {
    'jasmine': true
  },
  'extends': 'standard',
  'installedESLint': true,
  'plugins': [
    'standard',
    'promise',
    'import'
  ],
  'rules': {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error'
  }
}
