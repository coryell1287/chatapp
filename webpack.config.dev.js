const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('css/styles.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.join(__dirname, 'src/actions/'),
      reducers: path.join(__dirname, 'src/reducers/'),
      store: path.join(__dirname, 'src/store/'),
      router: path.join(__dirname, 'src/router/'),
      components: path.join(__dirname, 'src/components/'),
      containers: path.join(__dirname, 'src/containers/'),
      api: path.join(__dirname, 'src/api/'),
      devTools: path.join(__dirname, 'src/devTools/'),
      assets: path.join(__dirname, 'src/assets/')
    },
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, './src')]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }),
    }, {
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