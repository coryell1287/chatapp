const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': production,
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.jsx?$/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        loader: 'css-loader'
      }),
    },{
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 40000,
          name: 'assets/[name].[ext]',
          context: './images'
        }
      },
        'image-webpack-loader?{}'
      ]
    }]
  },
};

