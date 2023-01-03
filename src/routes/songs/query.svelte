<script lang="ts">
	import { query } from './store';
	import { query_result } from './store';
	let value: string = '';
</script>

<form on:submit|preventDefault={() => ($query = value)}>
	<input type="search" bind:value placeholder="search" />
	<button>搜索</button>
</form>
{#if $query_result.error !== null}
	<div class="error">
		{$query_result.error.message}
	</div>
{/if}
