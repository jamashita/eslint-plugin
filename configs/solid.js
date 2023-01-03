'use strict';

module.exports = {
  'extends': [
    require.resolve('./jsx.js'),
    'plugin:solid/typescript'
  ],
  'parserOptions': {
    'ecmaVersion': 2022,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'solid'
  ],
  'env': {
    'browser': true,
    'es2020': true,
    'es2021': true,
    'es6': true
  },
  'rules': {
    'solid/components-return-once': 'error',
    'solid/event-handlers': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'solid/imports': 'error',
    'solid/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'solid/jsx-no-script-url': 'error',
    'solid/jsx-no-undef': [
      'error',
      {
        autoImport: false,
        typescriptEnabled: true
      }
    ],
    'solid/jsx-uses-vars': 'error',
    'solid/no-destructure': 'error',
    'solid/no-innerhtml': 'error',
    'solid/no-proxy-apis': 'error',
    'solid/no-react-deps': 'error',
    'solid/no-react-specific-props': 'error',
    'solid/no-unknown-namespaces': 'error',
    'solid/prefer-classlist': 'error',
    'solid/prefer-for': 'error',
    'solid/prefer-show': 'error',
    'solid/reactivity': 'error',
    'solid/self-closing-comp': 'error',
    'solid/style-prop': 'error'
  }
};
