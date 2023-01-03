<script>
	import { query_result } from './store';
</script>

<table>
	<thead>
		<tr>
			<th title="name">歌名(中)</th>
			<th title="singer">歌手</th>
			<th title="lang">语种</th>
			<th title="remark">备注</th>
			<th title="name_jp">歌名</th>
			<th title="source">来源</th>
		</tr>
	</thead>
	<tbody>
		{#each $query_result.songs as song}
			<tr>
				<td>{song.name}</td>
				<td>{song.singer}</td>
				<td>{song.lang}</td>
				<td>{song.remark}</td>
				<td>{song.name_jp}</td>
				<td>{song.source}</td>
			</tr>
		{/each}
	</tbody>
</table>
