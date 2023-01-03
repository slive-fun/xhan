import { createDbWorker } from 'sql.js-httpvfs';

const workerUrl = new URL('sql.js-httpvfs/dist/sqlite.worker.js', import.meta.url);
const wasmUrl = new URL('sql.js-httpvfs/dist/sql-wasm.wasm', import.meta.url);

const dbFile = '/pb_data/data.db';

let maxBytesToRead = 10 * 1024 * 1024;
const worker = await createDbWorker(
	[{ from: 'inline', config: { serverMode: 'full', requestChunkSize: 4096, url: dbFile } }],
	workerUrl.toString(),
	wasmUrl.toString(),
	maxBytesToRead, // optional, defaults to Infinity
);

export const db = worker.db;
