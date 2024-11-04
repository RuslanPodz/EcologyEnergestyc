const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const basicConfig = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../templates/index.html'),
        }),
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../dist/assets') }],
        }),
        new SvgSpriteLoaderPlugin(), // Додаємо плагін для svg-sprite-loader
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true, // Витягувати в окремий файл
                            publicPath: 'path/to/sprites/', // Задайте шлях до спрайтів
                        },
                    },
                    'svgo-loader', // Опційно, для оптимізації SVG
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg'], // Додаємо .svg
        alias: {
            '@hooks': path.resolve(__dirname, '../src/hooks'),
        },
    },
    devServer: {
        port: 9000,
        historyApiFallback: true,
    },
};

module.exports = basicConfig;
