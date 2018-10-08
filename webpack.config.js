var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: './themes/neon/src/js/main.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            
          },
        },
        "css-loader",
        'postcss-loader'
      ]
    }]
  },
  
	output: {
		path: path.join(__dirname, "./themes/neon/static/dist"),
		filename: '[name].bundle.js',
	},
}