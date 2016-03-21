var webpack = require('webpack')
var path = require('path')

var entryPath = path.join(__dirname,'client/start.js')
var outputPath = path.join(__dirname,'/build/')

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
			'./client/start.js'
	],
	output: {
		path: '/build',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
    	new webpack.optimize.OccurenceOrderPlugin(),
  		new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
  	],
	module: {
		loaders: [{
     		test: /\.js?$/, // A regexp to test the require path. accepts either js or jsx
    		loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      		exclude: /node_modules/,
      		query: {
      			presets: ['react', 'es2015']
      		}		
    	}]
	}
};