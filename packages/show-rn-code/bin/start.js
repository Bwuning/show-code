#!/usr/bin/env node
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const path = require('path')
console.log(path.resolve( __dirname,'../tsconfig.json'),)
const compiler = Webpack(webpackConfig(
    path.resolve(process.cwd(), './app.tsx'),
    path.resolve( __dirname,'../node_modules/ts-loader/index.js'),
    path.resolve( __dirname,'../tsconfig.json'),
))

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
    stats: {
        colors: true,
    },
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', (e) => {
    console.log('Starting server on http://localhost:8080');
});
