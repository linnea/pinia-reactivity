const createState = () => ({});

const initialGetters = {};

/**
 * @return {Object} Snapshot Actions
 */
const createActions = () => ({
	setPrimaryColor({ commit }, value) {
		commit('setPrimaryColor', value);
	},
});

// separate Theme Mutations, to share between Editor and Frame/Site stores

export const createThemeMutations = ({ Vue }) => ({
	// color mutations
	setPrimaryColor(snapshot, value) {
		if (snapshot.color) {
			Vue.set(snapshot.color, 'primaryColor', value);
		} else {
			Vue.set(snapshot, 'color', { primaryColor: value });
		}
	},
});

const createMutations = ({ Vue }) => ({
	// /**
	//  * replaces the entire snapshot property in the Vuex Store's root state.
	//  * @param {Object} state snapshot property from state
	//  * @param {Object} payload.rootState root state of Vuex Store
	//  * @param {Object} payload.newSnapshot new snapshot to replace current snapshot
	//  */
	// syncSnapshot(state, { rootState, newSnapshot }) {
	// 	if (newSnapshot && typeof newSnapshot === 'object') {
	// 		Vue.set(rootState, 'snapshot', newSnapshot);
	// 	}
	// },
	// include Theme Mutations in this store's mutations
	...createThemeMutations({ Vue }),
});

export default function createSnapshotStore({ Vue }) {
	return {
		namespaced: true,
		state: createState,
		getters: initialGetters,
		actions: createActions(),
		mutations: createMutations({ Vue }),
	};
}
