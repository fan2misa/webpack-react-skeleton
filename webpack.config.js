
const webpack = require("webpack");
const path = require("path");

const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: ["./src/main.js", "./assets/less/main.less"],
    output: {
        path: path.resolve(__dirname, "./public"),
        publicPath: 'http://localhost:8080/',
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }))
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css")
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
    devtool: "eval-source-map"
};

module.exports = config;
