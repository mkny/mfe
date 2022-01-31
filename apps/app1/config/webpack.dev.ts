import { merge } from "webpack-merge";
import { container } from "webpack";

import packageJson from "../package.json";

import common, { WebpackCustomConfiguration } from "./webpack.common";
// import common, { Configuration } from "./webpack.common";

const PORT = process.env.PORT || 8080;

const config: WebpackCustomConfiguration = {
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    historyApiFallback: {
      index: "index.html",
    },
    // hot: true,
    // open: true,
    port: PORT,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
