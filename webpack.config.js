const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: './SRC/JS/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.API_URL': JSON.stringify('http://localhost:2000'),
        }),
      ],
};