// const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './src/index.js',
    // print: './src/comps/print/print.js',
    // msg: './src/comps/msg/msg.js',
  },
  // entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebPack Template',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
