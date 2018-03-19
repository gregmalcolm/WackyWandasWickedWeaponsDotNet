const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const createLodashAliases = require('lodash-loader').createLodashAliases

module.exports = {
    entry: {main: './ClientApp/src/js/app.js'},
    output: {
        filename: 'dist/bundle.js',
        path: path.resolve(__dirname, 'wwwroot'),
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
                })
            },
            {
                test: /\.js$/,
                loader: "lodash-loader"
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg)$/, 
                use: 'url-loader?limit=25000' 
            }
        ]
    },
    resolve: {
        alias: createLodashAliases()
    },
    plugins: [
        new ExtractTextPlugin("dist/css/styles.css"),
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, bundleOutputDir),
            template: './ClientApp/index.html',
        })
    ]
};