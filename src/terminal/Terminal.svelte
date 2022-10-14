<script lang="ts">
  import * as Terminal from "javascript-terminal";
  import Output from "./Output.svelte";
  import customCommands from "./custom-commands";
  let input;
  let inputElement: HTMLInputElement;
  let prompt = "$";

  const emulator = new Terminal.Emulator();

  console.log(customCommands);

  const customCommandMapping = Terminal.CommandMapping.create({
    ...Terminal.defaultCommandMapping,
    ...customCommands,
  });

  let emulatorState = Terminal.EmulatorState.create({
    commandMapping: customCommandMapping,
  });
  const historyKeyboardPlugin = new Terminal.HistoryKeyboardPlugin(
    emulatorState
  );
  const plugins = [historyKeyboardPlugin];

  function runCommand(cmd: string) {
    emulatorState = emulator.execute(emulatorState, cmd, plugins);
    input = "";
    setTimeout(() => inputElement.scrollIntoView(), 20);
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
        return (input = emulator.autocomplete(emulatorState, input));
    }
  }

  function runHash() {
    if (window.location.hash) {
      const cmd = decodeURIComponent(window.location.hash.substring(1));
      runCommand(cmd);
    }
  }
  runCommand('motd');
  runHash();
</script>

<svelte:window on:hashchange={runHash} />

<div class="container" on:click={() => inputElement.focus()}>
  {#each [...emulatorState.getOutputs()] as output}
    <Output {output} />
  {/each}

  <form on:submit|preventDefault={() => {window.location.hash === `#${input}` ? runHash() : '';window.location.hash = input}} autocomplete="off">
    <div class="input">
      <span>{prompt}&nbsp;</span>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        id="input"
        type="text"
        autofocus
        bind:value={input}
        on:keydown={handleSpecialKeys}
        bind:this={inputElement}
      />
      <span>{input}</span><span>_</span>
    </div>
  </form>
</div>

<style>
  .container {
    color: #999;
    background-color: #222;
    font-family: monospace;
    line-height: 1.5em;
    overflow: auto;
  }
  input {
    position: fixed;
    outline: none;
    border: none;
    flex: 1 1;
    color: transparent;
    background-color: transparent;
  }

  .input {
    display: flex;
    flex-direction: row;
  }

  .container {
    flex: 1 1;
  }
</style>
