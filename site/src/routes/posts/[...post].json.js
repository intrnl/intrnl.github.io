import * as posts from '@/lib/posts';


export async function get (req, res) {
	let { post } = req.params;
	let id = post.join('/');

	if (posts.entries[id]) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(await posts.get(id)));
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Post not found' }));
	}
}
