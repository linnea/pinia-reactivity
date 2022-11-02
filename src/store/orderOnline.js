import { defineStore } from 'pinia';
import usePagesStore from './pages';

const createGetters = () => ({
	secondPageLayout() {
		const layout = usePagesStore().id2Page.layout;
		// usePagesStore().getPage('id2').layout has similar results
		return layout || 'default-layout';
	},
});

const useOrderOnlineStore = defineStore('orderOnline', {
	getters: createGetters(),
});


export default useOrderOnlineStore;
