<script context='module'>
	export async function preload ({ params }) {
		let { post } = params;
		let id = post.join('/');

		let resp = await this.fetch(`/posts/${id}.json`);
		let data = await resp.json();

		if (resp.ok) {
			return { post: data };
		} else {
			return this.error(resp.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import DefaultView from '@/components/DefaultView';

	export let post;
	let localDate = post.data.date;

	onMount(() => {
		localDate = new Date(localDate).toLocaleDateString();
	});
</script>

<svelte:head>
	<title>{post.data.title} - ./intrnl</title>
	<meta property='og:title' content={post.data.title} />
	<meta property='og:description' content={post.data.description} />
	<link rel='stylesheet' href='/css/syntax.css' />
</svelte:head>

<DefaultView>
  <header>
    <h1>{post.data.title}</h1>
    {#if post.data.description}
      <p>{post.data.description}</p>
    {/if}
    <small>Posted on {localDate}</small>
  </header>

  <div>
    {@html post.html}
  </div>
</DefaultView>
