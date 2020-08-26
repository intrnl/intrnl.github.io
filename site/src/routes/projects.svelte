<script context='module'>
	let entries = [
		{
			header: 'Personal',
			items: [
				{
					name: 'Accord',
					description: 'A third party Discord web client',
					license: 'OSL-3.0',
					unreleased: true,
				},
			],
		},
		{
			header: 'Contributions',
			items: [
				{
					name: 'Powercord',
					description: 'A lightweight Discord client mod focused on simplicity and performance.',
					website: 'https://powercord.dev',
					source: 'https://github.com/powercord-org/powercord',
				},
			],
		},
		{
			header: 'Libraries',
			items: [
				{
					name: 'substate',
					description: 'Simple global state management',
					license: 'MIT',
					source: 'https://github.com/intrnl/substate',
				},
				{
					name: 'rodo',
					description: 'Simple filesystem router',
					license: 'MIT',
					source: 'https://github.com/intrnl/rodo',
				},
				{
					name: 'styl',
					description: 'Lightweight CSS-in-JS runtime',
					license: 'MIT',
					source: 'https://github.com/intrnl/styl',
				},
				{
					name: 'styleprops',
					description: 'CSS custom properties concat helper',
					license: 'MIT',
					source: 'https://github.com/intrnl/styleprops',
				},
				{
					name: 'fe',
					description: 'Glorified fetch wrapper',
					license: 'MIT',
					source: 'https://github.com/intrnl/fe',
				},
			],
		},
		{
			header: 'Bundler plugins',
			items: [
				{
					name: 'vite-plugin-svelte',
					description: 'Svelte integration for Vite',
					license: 'MIT',
					source: 'https://github.com/intrnl/vite-plugin-svelte',
				},
				{
					name: 'vite-plugin-external-worker',
					description: 'Vite plugin for external bundling of web workers',
					license: 'MIT',
					source: 'https://github.com/intrnl/vite-plugin-external-worker',
				},
			],
		},
	];
</script>

<script>
  import DefaultView from '@/components/DefaultView';
  import ExtLink from '@/components/ExtLink';
</script>

<svelte:head>
  <title>Projects - ./intrnl</title>
</svelte:head>

<DefaultView>
  <h1>Projects</h1>

	{#each entries as categories}
		<h2>{categories.header}</h2>

		<ul>
			{#each categories.items as item}
				<li role='article'><header>
					<h3>{item.name}</h3>
					{#if item.description}
						<p>{item.description}</p>
					{/if}

					{#if item.unreleased}
						<small>Soon.</small>
					{:else}
						{#if item.license}
							<small>{item.license}</small>
						{/if}
						{#if item.website}
							<small>
								<ExtLink url={item.website}>Website</ExtLink>
							</small>
						{/if}
						{#if item.npm}
							<small>
								<ExtLink url={item.npm}>NPM</ExtLink>
							</small>
						{/if}
						{#if item.source}
							<small>
								<ExtLink url={item.source}>Source</ExtLink>
							</small>
						{/if}
					{/if}
				</header></li>
			{/each}
		</ul>
	{/each}
</DefaultView>
