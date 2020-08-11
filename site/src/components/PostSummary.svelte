<script>
	import { onMount } from 'svelte';

	export let post;
	let localDate = post.date;

	onMount(() => {
		localDate = new Date(localDate).toLocaleDateString();
	})
</script>

<a href='/posts/{post.id}' rel='prefetch'>
	<h2>{post.title}</h2>
</a>
{#if post.description}
	<p>{post.description}</p>
{/if}
<small>
	Posted on <time datetime={post.date}>{localDate}</time>
</small>
