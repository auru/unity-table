const path = require('path');

const BIN = path.resolve(__dirname, '../node_modules/.bin');
const DEMO = path.resolve(__dirname, '../demo');

module.exports = {
	BIN,
	DEMO,
	WEBPACK: path.resolve(BIN, 'webpack'),
	STORYBOOK: path.resolve(BIN, 'start-storybook'),

	WEBPACK_CONFIG: path.resolve(__dirname, '../', 'webpack.config.js'),
	WEBPACK_DEMO_CONFIG: path.resolve(DEMO, 'webpack.config.js')
};
