const webpack = require("webpack");
const path = require("path");

module.exports = env => {
    let environment = env.ENV === "dev" ? "development" : "production";
    return {
        entry: {
            "dist/bundle.js": "./src/index.js"
        },
        output: {
            path: path.resolve(__dirname, ""),
            filename: "[name]"
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
        mode: environment,
        devtool:
            environment === "development" ? "eval-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ["babel-loader"],
                    include: path.resolve(__dirname, "src"),
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
                // {
                //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                //   loader: "url-loader?limit=100000"
                // }
            ]
        },
        devServer: {
            publicPath: "/",
            contentBase: path.join(__dirname, "/"),
            stats: "minimal",
            host: "localhost",
            port: "3000",
            open: true,
            hot: true,
            watchContentBase: true,
            historyApiFallback: {
                index: "index.html"
            }
        }
    };
};
