<script>
  import DefaultView from '@/components/DefaultView';

  export let status;
  export let error;

  let dev = process.env.NODE_ENV === 'development';
</script>

<DefaultView>
  <h1>{status}</h1>

  {#if status === 404}
    <p>Looks like you got lost, what were you trying to find?</p>
  {:else}
    <p>Looks like something spectacular happened, uh oh.</p>
  {/if}

  <p>Error: <code>{error.message}</code></p>

  {#if dev && error.stack}
    <pre>
      <code>{error.stack}</code>
    </pre>
  {/if}
</DefaultView>
