
const webpack = require("webpack");
const path = require("path");
const merge = require('webpack-merge');

const config = merge.smart(require('./webpack.config'), {
    devServer: {
        open: false
    },
    target: 'electron-renderer'
});

module.exports = config;
