const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
   rules: [
      {
        test: /\.stache$/,
        use: {
          loader: 'can-stache-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production"
};
