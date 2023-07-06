const path = require("path");

module.exports = {
  mode: "development", // or 'production' or 'none'
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
