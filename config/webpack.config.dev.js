const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
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
                use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.(sass|scss)$/,
                use: ['style-loader','css-loader','sass-loader',]
            },
            {
                test:/\.(jpeg|jpg|svg|gif|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        } 
                    },
    
                ],
              
            },
            {
                test:/\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                        ['@babel/preset-env', {targets: 'defaults'}]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/template.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'test', to: 'assets/data'},

            ]
        })

    ],

}