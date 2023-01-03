const es = require('./configs/es');
const im = require('./configs/import');
const jsx = require('./configs/jsx');
const next = require('./configs/next');
const node = require('./configs/node');
const react = require('./configs/react');
const recommended = require('./configs/recommended');
const solid = require('./configs/solid');
const ts = require('./configs/ts');

module.exports = {
  'configs': {
    es,
    import: im,
    jsx,
    next,
    node,
    react,
    recommended,
    solid,
    ts
  }
};
