import { defineStore } from 'pinia';
import Configuration from './configuration';
import usePagesStore from './pages';

export function getColors(properties) {
	const primaryColor = get(properties, 'color.primaryColor');

	return {
		['--primary-color']: primaryColor || '#000000',
	};
}


const createGetters = () => ({
	siteProperties() {uta
		return Configuration.getInstance().vuexStore.state.snapshot;
	},

	color() {
		return getColors(this.siteProperties);
	},

	setPrimaryColor(color) {
		const { vuexStore } = Configuration.getInstance();
		vuexStore.commit(`snapshot/setPrimaryColor`, color);
	},
});

const useOrderOnlineStore = defineStore('color', {
	getters: createGetters(),
});


export default useOrderOnlineStore;
