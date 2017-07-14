var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'eval',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.ejs',
            files: {
                css: 'main.css'
            }
        })
    ],
    externals: ['window']

};