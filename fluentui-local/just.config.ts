import { task, webpackDevServerTask, preset } from "fluentui-local-scripts";

preset();

task(
  "mf",
  webpackDevServerTask({
    config: "webpack.mf.config.js",
  })
);
