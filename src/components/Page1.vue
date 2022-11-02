<template>
	<div>
		<div
			class="color-box"
			:style="{ backgroundColor: color['--primary-color'] }"
		>
			{{ color['--primary-color'] }}
		</div>
		<button @click="changeColor('#ccc')">Gray</button>
		<button @click="changeColor('#000')">Black</button>
	</div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
// import { mapActions as mapVuexActions } from 'vuex';
import useColorStore from '../store/color';

export default {
	methods: {
		...mapActions(useColorStore, [
			'setPrimaryColor',
		]),

		routeToPage2() {
			this.$router.push('page2');
		},

		changeColor(color) {
			this.primaryColor = color;
		},
	},

	computed: {
		...mapState(useColorStore, [
			'color',
		]),

		primaryColor: {
			get() {
				return this.color['--primary-color'];
			},
			set(value) {
				this.setPrimaryColor(value);
			},
		},
	},

	mounted() {
		// this.syncSnapshot({ colors: {
		// 	primary: 'initial',
		// }});
	},
};
</script>
<style scoped>
.color-box {
	height: 100px;
	width: 100px;
	margin: 15px auto;
	color: white;
}
</style>
