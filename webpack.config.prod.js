const path = require("path");

module.exports = {
  entry: "./index.js",
  module: {
   rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.stache$/,
        use: {
          loader: "can-stache-loader"
        }
      }
    ]
  },
  output: {
    filename: "bundle.production.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production"
};
