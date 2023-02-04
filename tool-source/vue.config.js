const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "",
  // publicPath: "/tool/",
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
});
