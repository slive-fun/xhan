<script lang="ts">
	import { onMount } from 'svelte';
	import { query } from './store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let value: string = '';
	onMount(() => {
		value = $query;
	});
	function search() {
		$query = value;
		let w = value
			.split(' ')
			.filter((s) => s.trim().length > 0)
			.map((w) => `q=${w}`)
			.join('&');
		let u = new URL('?' + w, location.href);
		goto(u);
	}
</script>

<form on:submit|preventDefault={search}>
	<input type="search" bind:value placeholder="search" />
	<button>搜索</button>
</form>
