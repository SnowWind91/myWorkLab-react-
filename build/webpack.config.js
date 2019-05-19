const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [{
                test: /\.(jpg|gif|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10240
                    }
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: 'css-loader',
                    options: {
                        importloaders: 2,
                        modules: true,
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['es2015','react'],
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页',
            template:path.resolve(__dirname,'../src/index.html'),
            inject:true
        })
    ]
}
module.exports = config