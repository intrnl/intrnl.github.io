import * as posts from '@/lib/posts';
import { stringify } from '@/utils/json';


export async function get (req, res) {
	let { post } = req.params;
	let id = post.join('/');

	if (posts.entries[id]) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(stringify(await posts.get(id)));
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(stringify({ message: 'Post not found' }));
	}
}
