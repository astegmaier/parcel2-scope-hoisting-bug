const { createConfig, resolveMergeStylesSerializer } = require("fluentui-local-scripts/jest/jest-resources");
const path = require("path");

const config = createConfig({
  setupFiles: [path.resolve(path.join(__dirname, "config", "tests.js"))],
  snapshotSerializers: [resolveMergeStylesSerializer()],
});

module.exports = config;
