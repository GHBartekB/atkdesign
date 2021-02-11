const path = require('path');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'dev.js',
        path: path.resolve(__dirname, '../', 'build' ),
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],

}