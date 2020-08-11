<script context='module'>
	export async function preload ({ params }) {
		let { page } = params;

		let resp = await this.fetch(`/posts/page/${page}.json`);
		let data = await resp.json();

		if (resp.ok) {
			return { data };
		} else {
			return this.error(resp.status, data.message);
		}
	}
</script>

<script>
	import DefaultView from '@/components/DefaultView';
	import PostSummary from '@/components/PostSummary';

	export let data;
	$: ({ page, prev, next, items } = data);
</script>

<svelte:head>
	<title>Posts - Page {page} - ./intrnl</title>
</svelte:head>

<DefaultView>
	<h1>Posts - Page {page}</h1>

	<div>
		{#if prev}
			<a href='/posts/page/{page - 1}' rel='prefetch'>Previous</a>
		{/if}
		{#if next}
			<a href='/posts/page/{page + 1}' rel='prefetch'>Next</a>
		{/if}
	</div>

	<ul>
		{#each items as item (item.id)}
			<li role='article'>
				<header>
					<PostSummary post={item} />
				</header>
			</li>
		{/each}
	</ul>
</DefaultView>
