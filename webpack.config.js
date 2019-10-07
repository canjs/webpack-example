const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
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
    new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: { compress: false, mangle: false, dead_code: true }
    }),
    new webpack.NormalModuleReplacementPlugin(
      /can-route\/src\/routedata/,
      "./routedata-definemap.js"
    )
  ],
  resolve: {
    extensions: ["*", ".js"]
  }
};
