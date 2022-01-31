import { merge } from "webpack-merge";
import { container } from "webpack";

import common, { WebpackCustomConfiguration } from "./webpack.common";

// import common, { Configuration } from "./webpack.common";
const PORT = process.env.PORT || 8080;

const config: WebpackCustomConfiguration = {
  mode: "development",
  output: {
    // publicPath: `http://localhost:${PORT}/`,
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
      name: "container",
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};

export default merge<WebpackCustomConfiguration>(common, config);
