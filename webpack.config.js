const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    }, devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9006,
        hot: false,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        }
    }, module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(sc|sa|c)ss$/i,
                exclude: /bootstrap\.scss/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, "css-loader", "sass-loader"],
            },
            {
                test: /bootstrap\.scss$/i,
                use: [{


                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, "rtlcss-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]"
                }
            },
            {
                test: /\.(woff|svg|ttf|eot|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]"
                }
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "homePage",
                filename: "index.html"
                , template: "./src/index.html"
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: "fLandPage",
                filename: "EgyptTrip.html"
                , template: "./src/EgyptTrip.html"
            }
        ),new HtmlWebpackPlugin(
            {
                title: "sLandPage",
                filename: "TurkeyTrip.html"
                , template: "./src/TurkeyTrip.html"
            }
        ),new HtmlWebpackPlugin(
            {
                title: "signup",
                filename: "signup.html"
                , template: "./src/signup.html"
            }
        ),new MiniCssExtractPlugin({
            filename: "css/style.css"
        }), new CssMinimizerPlugin()
        ,new MiniCssExtractPlugin({
            filename: "css/signup.css"
        }), new CssMinimizerPlugin()
    ]
};