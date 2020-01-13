const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
   /*  new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }) */
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
