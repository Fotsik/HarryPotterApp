const path = require('path');

module.exports = {
  entry: {
    HarryPotterAPI: './src/js/HarryPotterAPI.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'test.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  }
};