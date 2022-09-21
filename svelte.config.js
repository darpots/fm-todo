import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		experimental: {
			inspector: {
				// change shortcut : string
				toggleKeyCombo: 'meta-shift',
				// deactivate after holding : boolean
				holdMode: true,
				// when to show the button 'always' | 'active | 'never'
				showToggleButton: 'active',
				// where to show the button 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
				toggleButtonPos: 'top-right'
			}
		}
	}
};

export default config;
