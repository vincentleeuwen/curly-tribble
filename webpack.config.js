module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'  
        }
      }
    ]
  }
}