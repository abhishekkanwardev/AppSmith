const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./bin"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril",
    }),
  ],
};

