const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { NODE_ENV } = process.env;
const MODE_VAL = NODE_ENV === 'development' ? 'development' : 'production';
const DEVTOOL_VAL = NODE_ENV === 'development' ? 'eval-source-map' : 'source-map';

let PLUGINS_VAL = [
  new WriteFilePlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new webpack.HotModuleReplacementPlugin(),
];

if (NODE_ENV === 'production') {
  PLUGINS_VAL = [
    new WriteFilePlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CopyWebpackPlugin([
      {
        from: './server.js',
        to: 'server.js',
        toType: 'file',
      },
    ]),
  ];
}

const config = {
  mode: MODE_VAL,
  devtool: DEVTOOL_VAL,
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: PLUGINS_VAL,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    open: true,
  },
};

module.exports = config;
