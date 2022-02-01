import path from "path";

import { container } from "webpack";
import { merge } from "webpack-merge";

import packageJson from "../package.json";

import common, { WebpackCustomConfiguration } from "./webpack.common";

const config: WebpackCustomConfiguration = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./Appname": "./src/App",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
