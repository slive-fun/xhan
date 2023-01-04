import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export const query = writable(
	!browser ? '' : new URL(location.href).searchParams.getAll('q').join(' '),
);

type Song = {
	name: string;
	singer: string;
	remark: string;
	lang: string;
	name_jp: string;
	source: string;
};

type QueryResult = {
	loading: boolean;
	songs: Song[];
};

export const songs = derived(
	query,
	(q, set) => {
		console.log(q);
		import('./songs')
			.then(({ db }) => db)
			.then(async (db) => {
				let s = q
					.split(' ')
					.filter((w) => w.trim().length > 0)
					.map((word) => {
						let chunk = ['name', 'singer', 'lang', 'name_jp', 'source', 'remark']
							.map((field) => {
								return `${field} like '%${word}%'`;
							})
							.join(' or ');
						return `(${chunk})`;
					})
					.join(' and ');
				if (s !== '') {
					s = 'where ' + s;
				}
				let r = await db.query(`select * from song ${s}`);
				set(r as any);
			});
	},
	[] as Song[],
);
