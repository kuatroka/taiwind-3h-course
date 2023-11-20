/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				widescreen: { raw: '(min-aspect-ratio: 3/2)' },
				tallscreen: { raw: '(min-aspect-ratio: 1/2)' }
			}
		}
	},
	plugins: []
};
