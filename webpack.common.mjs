// webpack.common.mjs       # Общая конфигурация Webpack

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

export default {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: 'ajs', // название нашей библиотеки
    libraryTarget: 'umd', // UMD (Universal Module Definition https://github.com/umdjs/umd) - шаблон, который позволяет использовать RequireJS и браузер
    libraryExport: 'default', // экспортируется имя default
    globalObject: 'this', // что принимать за глобальный объект, иначе сгенерируется window, а его, как вы знаете, на платформе Node.js нет
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
