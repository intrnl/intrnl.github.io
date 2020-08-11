let path = require('upath');
let fg = require('fast-glob');


function to64 (str) {
	let json = JSON.stringify(str);
	return Buffer.from(json).toString('base64');
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
	let map = new Map;

	return {
		name: 'rollup-plugin-glob-imports',
		async resolveId (id, importer) {
			if (!id.startsWith(proto)) return null;

			let glob = id.slice(proto.length);
			let key = to64({ glob, importer });

			let cwd = path.dirname(importer);
			let files = await fg(glob, { cwd });
			map.set(key, createRuntimeCode(cwd, files));

			return proto + key;
		},
		async load (id) {
			if (!id.startsWith(proto)) return null;

			let key = id.slice(proto.length);
			if (!map.has(key)) return null;

			return map.get(key);
		}
	};
}

module.exports = plugin;
