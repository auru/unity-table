const spawn = require('child_process').spawn;
const {blue, red, bold} = require('chalk');
const {WEBPACK, WEBPACK_CONFIG, STORYBOOK} = require('./constants');

console.log(blue(`${bold('Storybook')} started`));
const storybook = spawn(STORYBOOK, ['-p', 9001, '-c', '.storybook'], {
	stdio: 'inherit'
});

console.log(blue(`${bold('Webpack')} started`));
const webpack = spawn(WEBPACK, ['--config', WEBPACK_CONFIG, '--watch'], {
	stdio: 'inherit'
});

process.on('SIGINT', () => {
	storybook.kill();
	webpack.kill();
	console.log(red('\nDev script terminated'));
});
