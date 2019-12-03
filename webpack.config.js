const path = require('path');

module.exports = {
  entry: {
    HarryPotterAPI: './src/js/HarryPotterAPI.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'test.bundle.js'
  }
};