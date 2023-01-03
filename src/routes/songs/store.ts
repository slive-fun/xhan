import { writable, derived } from 'svelte/store';

export const query = writable('');

type Song = {
	name: string;
	singer: string;
	remark: string;
	lang: string;
	name_jp: string;
	source: string;
};

type QueryResult = {
	error: null | Error;
	songs: Song[];
};

export const query_result = derived(
	query,
	(q, set) => {
		if (q != '') {
			q = `where ${q}`;
		}
		import('./songs')
			.then(async ({ db }) => {
				let r = await db.query(`select * from song ${q}`);
				set({
					error: null,
					songs: r as any,
				});
			})
			.catch((err) => {
				set({
					error: err,
					songs: [],
				});
			});
	},
	{ error: null, songs: [] } as QueryResult,
);
