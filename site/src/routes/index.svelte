<script>
  import DefaultView from '@/components/DefaultView';
  import ExtLink from '@/components/ExtLink';
</script>

<svelte:head>
  <title>./intrnl</title>
</svelte:head>

<DefaultView>
  <h1>Hello.</h1>
  <p>I'm intrnl. I poke things for fun.</p>
	<p>Should probably get around to redoing this site.</p>

  <ul>
		<li><ExtLink url='https://intrnl.github.io/cv'>CV/Resume</ExtLink></li>
    <li><ExtLink url='https://github.com/intrnl'>GitHub</ExtLink></li>
    <li><ExtLink url='https://twitter.com/intrnl0'>Twitter</ExtLink></li>
    <li><ExtLink url='https://anilist.co/user/intrnl'>AniList</ExtLink></li>
  </ul>

  <p>
    I also write random posts on my blog from time to time, whether it's dev
    ramblings or song lyrics.
  </p>
</DefaultView>
