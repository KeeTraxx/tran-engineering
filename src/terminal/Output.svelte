<script lang="ts">
  import * as Terminal from "javascript-terminal";
  import TextOutput from "./TextOutput.svelte";
  import HeaderOutput from "./HeaderOutput.svelte";
  import DebugOutput from "./DebugOutput.svelte";

  const componentMap = {
    debug: DebugOutput,
  };

  export let output;
  let component;
  let type;

  switch (output.type) {
    case Terminal.OutputType.TEXT_OUTPUT_TYPE:
      component = TextOutput;
      break;
    case Terminal.OutputType.TEXT_ERROR_OUTPUT_TYPE:
      component = TextOutput;
      break;
    case Terminal.OutputType.HEADER_OUTPUT_TYPE:
      component = HeaderOutput;
      break;
    default:
      component = componentMap[output.type] || componentMap['debug'];
      break;
  }
</script>

<svelte:component this={component} {type} content={output.content} />
