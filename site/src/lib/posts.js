import * as context from 'glob:../../../content/posts/**/*.md';

let RE_POST = /posts\/(?<date>.+)\/(?<slug>.+)\.md$/i;


export let entries = Object.keys(context.entries).reverse().reduce((obj, key) => {
	let match = RE_POST.exec(key);
	if (!match) return obj;

	let { date, slug } = match.groups;
	obj[`${date}/${slug}`] = key;
	return obj;
}, {});

export let size = context.size;

export function get (id) {
	let key = entries[id];
	if (!key) return;

	return context.get(key);
}
