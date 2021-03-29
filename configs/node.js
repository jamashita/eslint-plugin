'use strict';

module.exports = {
  'extends': [
    'plugin:node/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module'
  },
  'plugins': [
    'node',
    'jama'
  ],
  'env': {
    'es2020': true,
    'es2021': true,
    'es6': true,
    'node': true
  },
  'rules': {
    /* node */
    // Possible Errors
    'node/handle-callback-err': 'off',
    'node/no-callback-literal': 'off',
    'node/no-exports-assign': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-exit': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'off',
    // Best Practices
    'node/no-deprecated-api': 'error',
    // Stylistic Issues
    'node/callback-return': 'off',
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/file-extension-in-import': 'off',
    'node/global-require': 'error',
    'node/no-mixed-requires': 'off',
    'node/no-process-env': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'error',
    'node/prefer-global/buffer': [
      'error',
      'always'
    ],
    'node/prefer-global/console': [
      'error',
      'always'
    ],
    'node/prefer-global/process': [
      'error',
      'always'
    ],
    'node/prefer-global/text-decoder': [
      'error',
      'always'
    ],
    'node/prefer-global/text-encoder': [
      'error',
      'always'
    ],
    'node/prefer-global/url-search-params': [
      'error',
      'always'
    ],
    'node/prefer-global/url': [
      'error',
      'always'
    ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error'
  }
};
