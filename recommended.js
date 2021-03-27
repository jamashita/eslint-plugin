module.exports = {
  'extends': [
    require.resolve('./configs/es'),
    require.resolve('./configs/import'),
    require.resolve('./configs/jest'),
    require.resolve('./configs/jsx'),
    require.resolve('./configs/node'),
    require.resolve('./configs/react'),
    require.resolve('./configs/ts')
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
