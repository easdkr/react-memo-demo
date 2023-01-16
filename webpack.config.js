const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const prod = process.env.NODE_ENV === 'production'

dotenv.config({
    path: path.join(__dirname, prod ? '.env' : `.${process.env.NODE_ENV}.env`),
})

module.exports = {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    entry: './src/index.tsx',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.join(__dirname, 'src'), 'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
}
