const es = require('./configs/es');
const im = require('./configs/import');
const jest = require('./configs/jest');
const jsx = require('./configs/jsx');
const node = require('./configs/node');
const react = require('./configs/react');
const ts = require('./configs/ts');
const recommended = require('./configs/recommended');

module.exports = {
  'configs': {
    es,
    import: im,
    jest,
    jsx,
    node,
    react,
    ts,
    recommended
  }
};
