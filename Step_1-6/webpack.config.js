// webpack.config.mjs       # Точка входа конфигурации Webpack

const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const dev = require("./webpack.dev");
const prod = require("./webpack.prod");

module.exports = (env) => {
  if (env.production) {
    return merge(common, prod);
  } else {
    return merge(common, dev);
  }
};
