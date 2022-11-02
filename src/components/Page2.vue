<template>
	<div>
		Page 2 -
		<p>secondPageLayout: {{ secondPageLayout }}</p>
		<p>The actual set page's layout: {{ id2Page.layout }}</p>
		<p>The actual set page's layout: {{ page2.layout }}</p>
		<p>The above two layouts should match and both be 'correct-layout'</p>
	</div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import usePagesStore from '../store/pages';
import useOrderOnlineStore from '../store/orderOnline';

export default {
	computed: {
		...mapState(usePagesStore, [
			'id2Page',
			'getPage'
		]),

		...mapState(useOrderOnlineStore, [
			'secondPageLayout'
		]),

		// This getter works
		page2() {
			return this.getPage('id2');
		},
	},
	methods: {
		...mapActions(usePagesStore, [
			'setActivePage',
		]),
	},
	beforeMount() {
		this.setActivePage('id2', { layout: 'correct-layout' });

		const pagesStore = usePagesStore();
		// You can see 'id2' is present on the pages store.
		console.log(pagesStore);
	},
};
</script>
