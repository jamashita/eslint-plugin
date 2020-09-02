const base = require('./base');
const jest = require('./jest');
const react = require('./react');

module.exports = {
  ...jest,
  ...react,
  ...base
};
