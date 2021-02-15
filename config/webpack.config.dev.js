const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/[name]-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'build' ),
    },
    devServer: {
        open:true,
        contentBase: path.resolve(__dirname, '../', 'public'),

    },
    module: {
       rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { 
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader',]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],

}