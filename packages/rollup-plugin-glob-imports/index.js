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


let template = `
export let entries = {
{{ENTRIES_PLACEHOLDER}}
};

export let size = {{ENTRIES_SIZE}};

export function get (id) {
	if (!entries[id]) throw new Error(\`\${id} not found\`);
	return entries[id];
}
`;

function createRuntimeCode (cwd, files) {
	return template
		.replace('{{ENTRIES_PLACEHOLDER}}', files.map((file) => {
			let normal = path.normalizeSafe(file);

			let resolved = !normal.startsWith('./') && !normal.startsWith('../')
				? `./${normal}`
				: normal;

				let absolute = path.join(cwd, resolved);

				return `  '${resolved}': () => import('${absolute}'),`;
		}).join('\n'))
		.replace('{{ENTRIES_SIZE}}', files.length);
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
