<script lang="ts">
  import * as Terminal from "javascript-terminal";
  import Output from "./Output.svelte";
  import customCommands from './custom-commands';
  let input;
  let prompt = "$";

  const emulator = new Terminal.Emulator();

  console.log(customCommands);

  const customCommandMapping = Terminal.CommandMapping.create({
  ...Terminal.defaultCommandMapping,
  ...customCommands
});

  let emulatorState = Terminal.EmulatorState.create({
    'commandMapping': customCommandMapping
  });
  const historyKeyboardPlugin = new Terminal.HistoryKeyboardPlugin(
    emulatorState
  );
  const plugins = [historyKeyboardPlugin];

  function runCommand(cmd: string) {
    emulatorState = emulator.execute(emulatorState, cmd, plugins);
    input = "";
  }

  function handleSpecialKeys(ev: KeyboardEvent) {
    switch (ev.key) {
      case "ArrowUp":
        ev.preventDefault();
        return (input = historyKeyboardPlugin.completeUp());
      case "ArrowDown":
        ev.preventDefault();
        return (input = historyKeyboardPlugin.completeDown());
      case "Tab":
        ev.preventDefault();
        return input = emulator.autocomplete(emulatorState, input);
    }
  }
</script>

<div class="container">
  {#each [...emulatorState.getOutputs()] as output}
    <Output output={output} />
  {/each}

  <form on:submit|preventDefault={() => runCommand(input)} autocomplete="off">
    <div class="input">
      <span>{prompt}&nbsp;</span>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        id="input"
        type="text"
        autofocus
        bind:value={input}
        on:keydown={handleSpecialKeys}
      />
    </div>
  </form>
</div>

<style>
  * {
    color: #999;
    background-color: #111;
    font-family: monospace;
    line-height: 1.5em;
  }

  input {
    outline: none;
    border: none;
    flex: 1 1;
  }

  .input {
    display: flex;
    flex-direction: row;
  }

  .container {
    flex: 1 1;
  }

  .header::before {
    content: "$ ";
  }
</style>
