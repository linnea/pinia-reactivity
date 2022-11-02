/**
 * Configuration class for providing data to Pinia stores
 *
 * @return {Object} Class
 */
export default class Configuration {
	vuexStore;

	static #instance;

	constructor({ vuexStore }) {
		this.vuexStore = vuexStore;

		Configuration.#instance = this;
	}

	static getInstance() {
		return Configuration.#instance;
	}
}
