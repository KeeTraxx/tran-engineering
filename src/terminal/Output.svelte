<script lang="ts">
  import * as Terminal from "javascript-terminal";
  import TextOutput from "./TextOutput.svelte";
  import HeaderOutput from "./HeaderOutput.svelte";
  import DebugOutput from "./DebugOutput.svelte";

  export let output;
  let component;
  let type;

  switch (output.type) {
    case Terminal.OutputType.TEXT_OUTPUT_TYPE:
      component = TextOutput;
      type = output.type;
      break;
    case Terminal.OutputType.TEXT_ERROR_OUTPUT_TYPE:
      component = TextOutput;
      type = output.type;
      break;
    case Terminal.OutputType.HEADER_OUTPUT_TYPE:
      component = HeaderOutput;
      break;
    default:
      component = output.component || DebugOutput;
      break;
  }
</script>

<svelte:component this={component} {type} content={output.content} />
