'use strict';

module.exports = {
  'extends': [
    require.resolve('./react.js'),
    'plugin:@next/next/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2022,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'next'
  ],
  'env': {
    'browser': true,
    'es2020': true,
    'es2021': true,
    'es6': true
  },
  'rules': {
    '@next/next/google-font-display': 'error',
    '@next/next/google-font-preconnect': 'error',
    '@next/next/inline-script-id': 'error',
    '@next/next/next-script-for-ga': 'error',
    '@next/next/no-assign-module-variable': 'error',
    '@next/next/no-before-interactive-script-outside-document': 'error',
    '@next/next/no-css-tags': 'error',
    '@next/next/no-document-import-in-page': 'error',
    '@next/next/no-duplicate-head': 'error',
    '@next/next/no-head-element': 'error',
    '@next/next/no-head-import-in-document': 'error',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'off',
    '@next/next/no-page-custom-font': 'error',
    '@next/next/no-script-component-in-head': 'error',
    '@next/next/no-styled-jsx-in-document': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-title-in-document-head': 'error',
    '@next/next/no-typos': 'error',
    '@next/next/no-unwanted-polyfillio': 'error'
  }
};
