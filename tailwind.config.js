/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Dosis", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			colors: {
				"custom-red": "#C82B2D",
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontFamily: "Merriweather, serif",
						},
						h2: {
							fontFamily: "Merriweather, serif",
						},
						h3: {
							fontFamily: "Merriweather, serif",
						},
						h4: {
							fontFamily: "Merriweather, serif",
						},
						h5: {
							fontFamily: "Merriweather, serif",
						},
						h6: {
							fontFamily: "Merriweather, serif",
						},
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
