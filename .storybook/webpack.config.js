module.exports = {
	module: {
		rules: [
			{
				test: /\.md$/,
				use: 'raw-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{loader: 'postcss-loader'}
				]
			}
		]
	}
};
