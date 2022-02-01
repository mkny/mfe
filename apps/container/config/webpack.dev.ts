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
    hot: true,
    port: PORT,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "container",
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
        app2: "app2@http://localhost:3002/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
