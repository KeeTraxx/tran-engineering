<script lang="ts">
    export let content;
    export let type;
    console.log(content);
</script>
<pre data-type={type}>
{JSON.stringify(content, null, 2)}
</pre>