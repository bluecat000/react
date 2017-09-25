const path = require('path');
const LOADER = require('./webpack.loader.js');
const { ENTRY,OUTPUT,PLUGINS } = require('./webpack.file.js');

const Config = {
    devtool: 'cheap-module-eval-source-map',
    entry: ENTRY,
    output: OUTPUT,
    module: LOADER,
    plugins: [...PLUGINS],
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, './static/jquery-1.10.2.min.js')
        }
    },
    devServer: {
        hot: true,
        stats: 'minimal',
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'develop'),
        publicPath: '/',
        inline: true,
        port: 1000
    },
    externals: {
        jquery: 'jQuery'
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 100000
    }
};

module.exports = Config;
