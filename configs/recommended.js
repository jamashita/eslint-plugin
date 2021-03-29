'use strict';

module.exports = {
  'extends': [
    require.resolve('./es.js'),
    require.resolve('./import.js'),
    require.resolve('./jest.js'),
    require.resolve('./jsx.js'),
    require.resolve('./node.js'),
    require.resolve('./react.js'),
    require.resolve('./ts.js')
  ],
  'plugins': [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'jest',
    '@typescript-eslint',
    '@jamashita'
  ]
};
