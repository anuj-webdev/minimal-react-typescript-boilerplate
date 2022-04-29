/**
 * Production Webpack's configuration file.
 * See options https://webpack.js.org/configuration/.
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'production', 
  devtool: false,
});
