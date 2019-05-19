'use strict'
const WebpackDevServer = require('webpack-dev-server');
const config = require('../build/webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../dist'), //服务器静态资源访问根目录
    historyApiFallback: true, ////在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 8888,
    publicPath: '/'
})
server.listen(8888,'localhost',function(err){
    console.log(err)
})