import { set, ref } from 'vue';
import { defineStore } from 'pinia';

export const createGetters = () => ({
	/**
	 * Gets the second page id after being added to the store
	 * @return {Object}
	 */
	id2Page() {
		const page = this.id2;
		return page || {};
	},

	getPage: (state) => (id) => {
		return state[id] || {};
	},
});

export const createActions = () => ({
	setActivePage(id, options) {
		const optionsRef = ref(options);
		set(this, id, optionsRef);
	},
});


const usePagesStore = defineStore('pages', {
	state: () => ({
		// id2: {},
	}),
	getters: createGetters(),
	actions: createActions(),
});

export default usePagesStore;
