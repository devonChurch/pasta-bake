const { resolve } = require('path');

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {

	return {

		entry: './src/index.js',

		output: {

			path: resolve(__dirname),

			filename: 'handler.js',

			// publicPath:

			// library: 'corn-chips',

			libraryTarget: 'commonjs', // 'umd'

			// pathinfo

		},

		module: {

			rules: [

				{
					enforce: 'pre',
					test: /\.js$/,
					include: [resolve(__dirname, 'src')],
					loader: 'eslint-loader',
				},

				{
					test: /\.js$/,
					// include: [resolve(__dirname, 'src')],
					exclude: [/node_modules/],
					// loaders: ['babel-loader'],
					loader: 'babel-loader',
					// options: {
					// 	presets: ['stage-0'],
					// },

				},

			],

		},

		devtool: false, // isProduction ? 'source-map' : 'eval',

		context: __dirname,

		target: 'node', // 'web', // 'node', //

	};

};
