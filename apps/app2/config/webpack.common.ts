import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import "dotenv/config";

export interface WebpackCustomConfiguration extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration;
}

const common: WebpackCustomConfiguration = {
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      templateParameters: process.env,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
};

export default common;
