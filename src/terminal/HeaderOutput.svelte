<script lang="ts">
  export let content;
  export let type;
</script>

<div data-type={type}>$&nbsp;{content.command}</div>

<style>
  div {
    opacity: 0.6;
  }
</style>
