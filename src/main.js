import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router';
import { createPinia, PiniaVuePlugin, setActivePinia } from 'pinia';
import Configuration from './store/configuration';
import App from './App.vue'
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import createSnapshotStore from './store/snapshot';

const router = new Router({
	routes: [
		{
			name: 'home',
			path: '/',
			component: Page1,
		},
		{
			name: 'page2',
			path: '/page2',
			component: Page2,
		},
	]
});

const STORE_MODULES = {
	snapshot: createSnapshotStore,
};

const modules = Object
	.entries(STORE_MODULES)
	.reduce((mods, [ns, createModule]) => {
		mods[ns] = createModule({ Vue });
		return mods;
	}, {});

const pinia = createPinia();

Vue.use(Vuex);
Vue.use(Router);
Vue.use(PiniaVuePlugin);
setActivePinia(pinia);
Vue.use(pinia);

const store = new Vuex.Store({
	modules,
});

new Configuration({
	vuexStore: store,
});

Vue.use(store);

const app = new Vue({
	pinia,
	router,
	store,
	render: h => h(App),
});


Vue.config.productionTip = false

app.$mount('#app')
