const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['react'] },
        include: path.join(__dirname, 'scripts'),
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)\??/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },

};
