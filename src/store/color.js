import { defineStore } from 'pinia';
import Configuration from './configuration';

export function getColors(snapshot) {
	const primaryColor = snapshot?.color?.primaryColor;

	return {
		['--primary-color']: primaryColor || '#000000',
	};
}

const createActions = () => ({
	setPrimaryColor(color) {
		const { vuexStore } = Configuration.getInstance();

		// is it because we're not preformaing a
		vuexStore.commit(`snapshot/setPrimaryColor`, color);
	},
});

const createGetters = () => ({
	siteProperties() {
		return Configuration.getInstance().vuexStore.state.snapshot;
	},

	color() {
		return getColors(this.siteProperties);
	},
});

const useOrderOnlineStore = defineStore('color', {
	getters: createGetters(),
	actions: createActions(),
});


export default useOrderOnlineStore;
