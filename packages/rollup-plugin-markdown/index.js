let path = require('path');

let frontmatter = require('gray-matter');
let unified = require('unified');
let remarkParse = require('remark-parse');
let remarkRehype = require('remark-rehype');
let rehypePrism = require('@mapbox/rehype-prism');
let rehypeUrl = require('rehype-urls');
let rehypeStringify = require('rehype-stringify');

let { createFilter } = require('@rollup/pluginutils');


let md = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypePrism)
	.use(rehypeUrl, rewriteUrl)
	.use(rehypeStringify);

function rewriteUrl (url, node) {
	if (!url.startsWith('/')) {
		node.properties.rel = 'noopener noreferrer';
	}
}


function plugin (opts = {}) {
	let extensions = opts.extensions || ['.md'];
	let filter = createFilter(opts.include, opts.exclude);

	return {
		name: 'rollup-plugin-markdown',
		async transform (content, id) {
			if (!extensions.includes(path.extname(id))) return null;
			if (!filter(id)) return null;

			let matter = frontmatter(content);
			let html = (await md.process(matter.content)).toString();

			return {
				code: [
					`export let data = ${JSON.stringify(matter.data)};`,
					`export let html = ${JSON.stringify(html)};`,
				].join('\n'),
				map: { mappings: '' },
			};
		},
	};
}

module.exports = plugin;
