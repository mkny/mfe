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
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/components",
        "./Appname": "./src/App",
      },
      remotes: { app2: "app2@http://localhost:3002/remoteEntry.js" },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
