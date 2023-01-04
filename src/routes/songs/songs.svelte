<script>
	import { songs } from './store';
</script>

<table>
	<thead>
		<tr>
			<th title="name">歌名(中)</th>
			<th title="singer">歌手</th>
			<th title="lang">语种</th>
			<th title="remark">备注</th>
		</tr>
	</thead>
	<tbody>
		{#each $songs as song}
			<tr>
				<td>
					{song.name}
					{song.name_jp}
					{#if song.source !== ''}
						来自: {song.source}
					{/if}
				</td>
				<td class="singer">{song.singer}</td>
				<td>{song.lang}</td>
				<td>{song.remark}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.singer {
		max-width: 80px;
	}
</style>
