var path = require('path');
var webpack = require('webpack');

module.exports = { 
    entry: path.join(__dirname, 'main.js'),
     output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
     module: {   
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'scss'),
                loaders: ['style', 'css', 'sass']
            }
        ] 
    },
};
