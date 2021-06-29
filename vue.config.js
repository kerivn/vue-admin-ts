const { resolve } = require("path");
const WebpackBar = require("webpackbar");
module.exports = {
  lintOnSave: false, // 关闭ESLINT 检查
  devServer: {
    hot: true,
    port: "8989",
    open: true,
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
          "*": resolve(""),
          Assets: resolve("src/assets"),
        },
      },
    };
  },
};
