const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '',

  devServer: {
    port: 8888,
    host: "localhost",
    https: false,
    open: true,
    proxy: "http://localhost:3000"
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"));
  },

  assetsDir: "static"
};
