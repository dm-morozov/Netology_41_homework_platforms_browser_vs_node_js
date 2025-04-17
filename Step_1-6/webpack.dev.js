// webpack.dev.mjs          # Конфигурация для разработки Webpack

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./result",
    open: true,
    port: 3000,
  },
};

