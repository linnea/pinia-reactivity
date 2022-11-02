import Vue from 'vue';
// import Vuex from 'vuex';
import Router from 'vue-router';

// has to be called before creating a store instance
// Vue.use(Vuex);

/**
 * Vue 3 comes with several global api changes outlined in the RFC linked below
 * This file should be deleted entirely and replaced with vue's own exports after the upgrade
 *
 * @param  {Object} opts - options typically given to `new Vue()`
 * @return {Object} this value is not the app instance, mount() returns that instead
 * because that's the only way I could find to imitate the Vue 3 API
 * @see https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md
 */
export function createApp(opts) {
	const options = { ...opts };

	return {
		use(plugin, ...args) {
			// if (plugin instanceof Vuex.Store) {
			// 	options.store = plugin;
			// } else
			if (plugin instanceof Router) {
				Vue.use(Router);
				options.router = plugin;
			} else {
				Vue.use(plugin, ...args);
			}
			return this;
		},

		mixin(...args) {
			Vue.mixin(...args);
			return this;
		},

		component(...args) {
			Vue.component(...args);
			return this;
		},

		directive(...args) {
			Vue.directive(...args);
			return this;
		},

		mount(...args) {
			const app = this.instance;
			app.$mount(...args);
			return app;
		},

		get instance() {
			return new Vue(options);
		},

		config: {
			set productionTip(value) {
				Vue.config.productionTip = value;
			},

			set devtools(value) {
				Vue.config.devtools = value;
			},

			set errorHandler(value) {
				Vue.config.errorHandler = value;
			},

			optionMergeStrategies: {
				set mixins(value) {
					Vue.config.optionMergeStrategies.mixins = value;
				},
			},
		},
	};
}
