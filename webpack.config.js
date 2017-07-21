const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.jsx')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						{loader: 'postcss-loader'}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	],
	devtool: 'sourcemap'
};
