<template>
	<div>
		Page 1
		<p>Here we'll check on the <strong>secondPageLayout</strong> for the first time.
		It gets calculated, and does not recalculate even on subsequent navigation
		when the pages store updates.
		<p>The layout is default because the page hasn't been loaded into the store
		yet, but something on this page
		<p><strong>Page 2's secondPageLayout: {{ secondPageLayout }}</strong></p>
		<button @click="routeToPage2">
			Go to Page 2
		</button>
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
		this.setActivePage('id1', { layout: 'layout1' });
	},
};
</script>
