const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.production.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  target: "web",
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
  plugins: [
    new webpack.optimize.SideEffectsFlagPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /can-route\/src\/routedata/,
      "./routedata-definemap.js"
    )
  ]
};
