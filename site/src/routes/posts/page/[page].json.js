import * as posts from '@/lib/posts';
import { stringify } from '@/utils/json';


let POSTS_PER_PAGE = 10;

export async function get (req, res) {
	let page = parseInt(req.params.page);

	let start = (page - 1) * POSTS_PER_PAGE;
	let end = start + POSTS_PER_PAGE;

	if (req.params.page !== page.toString() || page < 1 || start > posts.size) {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(stringify({ message: 'Page not found' }));
		return;
	}

	let prev = page !== 1;
	let next = posts.size > end;

	let promises = Object.keys(posts.entries).slice(start, end)
		.map(async (id) => ({ id, ...(await posts.get(id)).data }));

	let items = await Promise.all(promises);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(stringify({ page, prev, next, items }));
}
