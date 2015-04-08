'use strict';

var path = require('path');
var webpack = require('webpack');
var nodePath = path.join(__dirname, 'node_modules');

var isDevelopment = process.env.NODE_ENV !== 'production';

var plugins = [
	new webpack.ProvidePlugin({
		React: 'react'
	}),
	new webpack.DefinePlugin({
		DEBUG: isDevelopment
	})
];

if (!isDevelopment) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	}));
	plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = {
	debug: isDevelopment,
	cache: isDevelopment,
	devtool: isDevelopment ? 'eval' : false,
	watch: false,
	entry: './app/app.js',
	stats: {
		colors: true,
		reasons: isDevelopment
	},
	resolveLoader: {
		root: [nodePath]
	},
	plugins: plugins,
	output: {
		path: path.join(__dirname, 'build/'),
		filename: 'bundle.js'
	},
	module: {
		noParse: [
			/\.min\.js/
		],
		preLoaders: [
			{
				test: /\.js$/,
				exclude: [nodePath],
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: [nodePath],
				loader: 'babel-loader'
			}
		]
	}
};
