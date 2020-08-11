<script>
  import DefaultView from '@/components/DefaultView';
  import ExtLink from '@/components/ExtLink';
</script>

<svelte:head>
  <title>Projects - ./intrnl</title>
</svelte:head>

<DefaultView>
  <h1>Projects</h1>

  <h2>Personal</h2>
  <ul>
    <li role='article'><header>
      <h3>Accord</h3>
      <p>A third party Discord web client</p>
      <small>OSL-3.0 - Soon.</small>
    </header></li>
  </ul>

  <h2>Contributed</h2>
  <ul>
    <li role='article'><header>
      <h3>Powercord</h3>
      <p>A lightweight Discord client mod focused on simplicity and performance.</p>
      <small>
        <ExtLink url='https://powercord.dev'>Website</ExtLink> -
        <ExtLink url='https://github.com/powercord-org/powercord'>Source code</ExtLink>
      </small>
    </header></li>
  </ul>

  <h2>Libraries and miscellaneous stuff</h2>
  <ul>
    <li role='article'><header>
      <h3>svelte-query</h3>
      <p>Svelte library for managing, caching and syncing asynchronous and remote data</p>
      <small>
        MIT -
        <ExtLink url='https://npm.im/@intrnl/svelte-query'>npm</ExtLink> -
        <ExtLink url='https://github.com/intrnl/svelte-query'>Source code</ExtLink>
      </small>
    </header></li>
    <li role='article'><header>
      <h3>vite-plugin-svelte</h3>
      <p>Svelte integration for Vite, a fast web dev tool</p>
      <small>
        MIT -
        <ExtLink url='https://npm.im/vite-plugin-svelte'>npm</ExtLink> -
        <ExtLink url='https://github.com/intrnl/vite-plugin-svelte'>Source code</ExtLink>
      </small>
    </header></li>
    <li role='article'><header>
      <h3>vite-plugin-external-worker</h3>
      <p>Vite plugin for non-inline bundling of web workers</p>
      <small>
        MIT -
        <ExtLink url='https://npm.im/vite-plugin-external-worker'>npm</ExtLink> -
        <ExtLink url='https://github.com/intrnl/vite-plugin-external-worker'>Source code</ExtLink>
      </small>
    </header></li>
    <li role='article'><header>
      <h3>substate</h3>
      <p>Simple global state management</p>
      <small>
        MIT -
        <ExtLink url='https://npm.im/@intrnl/substate'>npm</ExtLink> -
        <ExtLink url='https://github.com/intrnl/substate'>Source code</ExtLink>
      </small>
    </header></li>
    <li role='article'><header>
      <h3>pako-esm</h3>
      <p>ESM conversion of pako, a high speed zlib port to JavaScript</p>
      <small>
        MIT -
        <ExtLink url='https://npm.im/@intrnl/pako-esm'>npm</ExtLink> -
        <ExtLink url='https://github.com/intrnl/pako-esm'>Source code</ExtLink>
      </small>
    </header></li>
  </ul>
</DefaultView>
