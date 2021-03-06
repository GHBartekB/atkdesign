const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'js/[name]-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'build' ),
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
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                            }
                        }

                    }
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
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css',
        }),
        new CopyPlugin({
            patterns: [
                {from: 'test', to: 'assets/data'},
            ]
        })
    ],

}