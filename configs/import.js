'use strict';

module.exports = {
  'extends': [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  'parserOptions': {
    'ecmaVersion': 2024,
    'sourceType': 'module'
  },
  'plugins': [
    'import'
  ],
  'env': {
    'browser': true,
    'es2020': true,
    'es2021': true,
    'es6': true
  },
  'rules': {
    /* import */
    // Helpful warnings
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unused-modules': 'error',
    // Module systems
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'error',
    // Static analysis
    'import/default': 'error',
    'import/named': 'off',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // Style guide
    'import/consistent-type-specifier-style': [
      'error',
      'prefer-top-level'
    ],
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'error',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-unassigned-import': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off'
  }
};
