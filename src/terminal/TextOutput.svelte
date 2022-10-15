<script lang="ts">
  export let content;
  export let type;
</script>

<div data-type={type}>{content}</div>

<style>
  [data-type="TEXT_ERROR_OUTPUT"] {
    color: #a00;
  }
</style>
