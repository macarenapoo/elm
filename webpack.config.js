var path = require("path");

var webpackConfig = [

  {
    entry: path.join(__dirname, 'src/index.js' ),
    output: {
      path: path.join(__dirname, "/dist/"),
      filename: "react-elm-experiment.bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          loader: "elm-webpack"
        }
      ],
      noParse: /\.elm$/
    },
    devtool: "#source-map",
    resolve: {
      extensions: ["", ".elm", ".js"],
      modulesDirectories: ["node_modules", "src", "src/js"]
    },
    resolveLoader: {
      modulesDirectories: ["node_modules"]
    },
    devServer: {
      quiet: false,
      noInfo: true,
      historyApiFallback: true,
      stats: { colors: true,
               chunkModules: false,
               assets: false,
               cached: true },
      inline: true,
      port: 8000,
      contentBase: 'dist'
    }
  }
];

module.exports = webpackConfig;
