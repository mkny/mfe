import path from "path";

import { merge } from "webpack-merge";

import common, { WebpackCustomConfiguration } from "./webpack.common";

const config: WebpackCustomConfiguration = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
};

export default merge<WebpackCustomConfiguration>(common, config);
