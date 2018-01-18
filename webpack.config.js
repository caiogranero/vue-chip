const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  externals: {
    vue: 'vue',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'less-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin( {
      uglifyOptions: {
        ie8: true,
        ecma: 8,
        minimize : true,
        output: {
          comments: false,
          beautify: false,
        },
        warnings: false
      }
    })
  ]
}

module.exports = [

  // Config 1: For browser environment
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-chip.min.js',
      libraryTarget: 'window',
      library: 'VueChip'
    }
  }),

  // Config 2: For Node-based development environments
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/Chip.vue'),
    output: {
      filename: 'vue-chip.js',
      libraryTarget: 'umd',

      // These options are useful if the user wants to load the module with AMD
      library: 'vue-chip',
      umdNamedDefine: true
    }
  })
]