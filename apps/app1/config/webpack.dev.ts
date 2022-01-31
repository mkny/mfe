import { merge } from "webpack-merge";
import { container } from "webpack";

import packageJson from "../package.json";

import common, { WebpackCustomConfiguration } from "./webpack.common";

const PORT = process.env.PORT || 8080;

const config: WebpackCustomConfiguration = {
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    headers: [
      {
        key: "Access-Control-Allow-Origin",
        value: "*",
      },
    ],
    historyApiFallback: {
      index: "index.html",
    },
    port: PORT,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/components",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
