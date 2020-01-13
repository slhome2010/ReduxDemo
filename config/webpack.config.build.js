const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  devtool: 'source-map',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
