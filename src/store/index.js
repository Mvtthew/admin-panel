import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		appName: 'TMM',
		appVersion: '0.6.1221'
	},
	getters: {
		getAppName(state) {
			return state.appName;
		},
		getAppVersion(state) {
			return state.appVersion;
		}
	},
	mutations: {},
	actions: {},
	modules: {}
});
