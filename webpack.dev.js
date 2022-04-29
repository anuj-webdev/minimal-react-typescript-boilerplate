/**
 * Development Webpack's configuration file.
 * See options https://webpack.js.org/configuration/.
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true, // compressed bundle
    hot: true,
    port: 3000
  },
});
