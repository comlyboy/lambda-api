const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/**
 * @param {string} url
 */
function getFullPath(url) {
	return path.resolve(__dirname, url);
}

/**
 * @type {import('webpack').Configuration}
 */
module.exports = (env, params) => {
	return {
		entry: getFullPath('src/lambda.ts'),
		target: 'node',
		externals: [nodeExternals()],
		mode: 'production',
		devtool: "source-map",
		stats: {
			all: false, // Disable everything initially
			errors: true, // Show errors
			warnings: true, // Show warnings
			assets: true, // Show emitted assets
			modules: true, // Show included modules
			chunks: true, // Show chunk information
			colors: true, // Colored output
			timings: true, // Show build timings
			hash: true, // Show build hash
			version: true, // Show Webpack version
			builtAt: true, // Show build timestamp
		},
		output: {
			libraryTarget: 'commonjs2',
			filename: 'lambda.js',
			path: getFullPath('dist'),
		},
		resolve: {
			extensions: ['.ts', '.js'],
			plugins: [
				// @ts-ignore
				new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
			],
		},
		module: {
			rules: [
				{
					test: /\.ts$/, // Process TypeScript files
					use: {
						loader: 'ts-loader',
						options: {
							compilerOptions: {
								declaration: false, // Prevents .d.ts file generation
							},
						},
					},
					exclude: /node_modules/,
				},
				{
					test: /\.ts$/,
					exclude: [
						'/test/',
						'/**/*.spec.ts'
					]
				}
			],
		},
		node: {
			__dirname: true,
			__filename: true,
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
					// extractComments: "all",
					terserOptions: {
						keep_fnames: true,
						keep_classnames: true,
						compress: {
							drop_console: false,
							drop_debugger: true
						},
					},
				})
			],
		},
	}
};
