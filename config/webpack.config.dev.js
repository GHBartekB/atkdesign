const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');

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
              
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/template.html'
        }),

    ],

}