<script>
  let name = ""
</script>

<div>
  <label for="name">Name</label>
  <input placeholder="Entrez un nom ici" bind:value={name} id="name"/>
</div>


{#if name.length > 9}
  <div>Wow, that's a long name!</div>
{/if}
