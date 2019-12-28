const path = require('path');

module.exports = {
  entry: {
    keyNameA: './src/index.js',
    keyNameB: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',//npm install --save-dev style-loader
          'css-loader',//npm install --save-dev css-loader
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',// npm install --save-dev file-loader 
          //'url-loader?limit=100000',// npm install --save-dev file-loader
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          //'file-loader',
          'url-loader?limit=100000', 
        ],
      },
      {
        test: /\.(xml)$/,
        use: [
          'xml-loader',
        ],
      },
    ],
   },
};