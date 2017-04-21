var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: ["./src/app/main.js"],
    materialize_scss: ["./src/stylesheets/materialize.scss"],
    home_scss: ["./src/stylesheets/home.scss"],
    about_scss: ["./src/stylesheets/about.scss"]
  },
  output: {
    path: path.join(__dirname, "/dist/app/"),
    filename: "[name].bundle.js"
  },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                include: /.scss$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: "css-loader!sass-loader" })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../stylesheets/[name].css")
    ],
    watch: true
};