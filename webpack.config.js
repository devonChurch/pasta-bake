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
					include: [resolve(__dirname, 'src')],
					loader: 'babel-loader',

				},

			],

		},

		devtool: false,

		context: __dirname,

		target: 'node', // 'web',

	};

};
