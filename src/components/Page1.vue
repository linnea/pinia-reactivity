<template>
	<div>

	</div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import usePagesStore from '../store/pages';
import useOrderOnlineStore from '../store/orderOnline';

export default {
	methods: {
		...mapActions(usePagesStore, [
			'setActivePage',
		]),
		routeToPage2() {
			this.$router.push('page2');
		},
	},

	computed: {
		...mapState(useOrderOnlineStore, [
			'secondPageLayout'
		]),
	},

	beforeMount() {
		this.setSiteProperties({ colors: {
			primary: 'initial',
		}});
	},
};
</script>
