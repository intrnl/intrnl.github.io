let path = require('upath');
let fg = require('fast-glob');


function to64 (str) {
	let json = JSON.stringify(str);
	return Buffer.from(json).toString('base64');
}
function from64 (str) {
	let base64 = Buffer.from(str, 'base64').toString('utf8');
	return JSON.parse(base64);
}

function createRuntimeCode (cwd, files) {
	return [
		'export let entries = {',
		...files.map((file) => {
			let normal = path.normalizeSafe(file);
			let resolved = !normal.startsWith('./') && !normal.startsWith('../')
				? `./${normal}`
				: normal;
			let absolute = path.join(cwd, resolved);

			return `  "${resolved}": () => import("${absolute}"),`;
		}),
		'};',
		'',
		`export let size = ${files.length};`,
		'',
		`export function get (id) {`,
		'  if (!entries[id]) throw new Error(`${id} not found`);',
		'  return entries[id]();',
		'}',
	].join('\n');
}

/** @type {import('rollup').RollupOptions} */
function plugin (opts = {}) {
	let proto = (opts.prefix || 'glob') + ':';

	return {
		name: 'rollup-plugin-glob-imports',
		async resolveId (id, importer) {
			if (!id.startsWith(proto)) return null;

			let glob = id.slice(proto.length);
			let cwd = path.dirname(importer);

			let key = to64({ glob, cwd });
			return proto + key;
		},
		async load (id) {
			if (!id.startsWith(proto)) return null;

			let key = id.slice(proto.length);
			let { glob, cwd } = from64(key);

			let files = await fg(glob, { cwd });
			return createRuntimeCode(cwd, files);
		}
	};
}

module.exports = plugin;
