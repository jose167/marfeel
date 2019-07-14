const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
      devServer: {
      contentBase: './dist'
  },
  plugins: [
   // new HtmlWebpackPlugin({
    //  title: 'Output Management'
   // })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
     module: {
       rules: [
          {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
              loader: 'babel-loader'
            }]
          },
          {

          test: /\.css$/,
            use: [
             'style-loader',
             'css-loader'
            ]} 
        ]
     }
};

