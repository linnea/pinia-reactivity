import Vue from 'vue'
import Router from 'vue-router';
import { createPinia, PiniaVuePlugin, setActivePinia } from 'pinia';
// import { createApp } from './createApp';
import App from './App.vue'
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

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


const pinia = createPinia();

Vue.use(Router);
Vue.use(PiniaVuePlugin);
setActivePinia(pinia);
Vue.use(pinia);

const app = new Vue({
	pinia,
	router,
	render: h => h(App),
});


Vue.config.productionTip = false

app.$mount('#app')
