const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({template: './index.html'})
const path = require('path')

module.exports = {
  entry: {app: './app/App.jsx'},
  output: {
    path: path.join(process.cwd(), '/dist'),
    publicPath: 'http://localhost:4000/',
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    hot: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['@babel/react', '@babel/preset-env', {'plugins': ['@babel/plugin-proposal-class-properties']}]
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
}