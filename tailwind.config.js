const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	darkMode: false,
	corePlugins: {
		ringColor: false,
	},
	theme: {
		colors: {
			gray: colors.coolGray,
			green: colors.green,
			red: colors.red,
			white: colors.white,
			sky: colors.sky,
			error: '#FF005E',
			pending: '#FFB800',
			success: '#A5DF00',
			blue: {
				300: '#32B5FF',
				400: '#00A3FF',
				900: '#006AE3'
			},
			ygray: {
				background: '#E5E5E5',
				50: '#EDEDED',
				100: '#F2F3F5',
				400: '#BDBDBD',
				500: '#A5A5A5',
				700: '#828282',
				900: '#333333',
			}
		},
		extend: {
			boxShadow: {
				base: '0 10px 30px rgb(209 213 223 / 50%)'
			},
		},
	}
};
