const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  output: {
    publicPath:'dist',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve:{
    extensions:['.ts','.js']
  },
  devtool: 'eval-source-map',
};