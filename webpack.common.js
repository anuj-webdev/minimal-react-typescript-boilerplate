/**
 * Common Webpack's configuration file, to hold common configurations for production and development.
 * See options https://webpack.js.org/configuration/.
 */
const path = require('path');

module.exports = {
  /*
   * Defaults to ./src
   * Here the application starts executing and webpack starts bundling.
   */
  entry: path.resolve(`${__dirname}/src/index.tsx`),
  // Options related to how webpack emits results.
  output: {
    path: path.resolve(`${__dirname}/public`),
    filename: 'bundle.js'
  },
  // Options for resolving module requests
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$/,
        loader: 'url-loader',
      },
    ],
  }
};
