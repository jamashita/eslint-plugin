const es = require('./configs/es');
const im = require('./configs/import');
const jest = require('./configs/jest');
const jsx = require('./configs/jsx');
const node = require('./configs/node');
const react = require('./configs/react');
const ts = require('./configs/ts');

module.exports = {
  'configs': [
    es,
    im,
    jest,
    jsx,
    node,
    react,
    ts
  ],
  'env': {
    'node': true
  },
  'globals': {
    'window': true,
    'document': true,
    'NodeJS': false
  }
};
