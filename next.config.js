/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Sunday June 13th 2021
**	@Filename:				next.config.js
******************************************************************************/

const Dotenv = require('dotenv-webpack');

module.exports = ({
	plugins: [
		new Dotenv()
	],
	env: {
		PROJECT_LOGO: process.env.PROJECT_LOGO,
		PROJECT_TITLE: process.env.PROJECT_TITLE,
		TITLE: process.env.TITLE,
		DESCRIPTION: process.env.DESCRIPTION,
		BUTTON: process.env.BUTTON,
		IMAGE: process.env.IMAGE,
		APP: process.env.APP,
		REPOSITORY: process.env.REPOSITORY,
		CONTRACT: process.env.CONTRACT,
		CREDITS: process.env.CREDITS,
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 25,
			minSize: 20000
		}
	},
	webpack: (config, {webpack}) => {
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
		return config;
	},
	webpackDevMiddleware: (config) => {
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config;
	},
});
