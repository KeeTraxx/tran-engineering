<script lang="ts">
  import * as Terminal from "javascript-terminal";
  import Output from "./Output.svelte";
  import customCommands from "./custom-commands";
  import GravityWell from "./GravityWell.svelte";
  let input;
  let inputElement: HTMLInputElement;
  let cursorElement: HTMLSpanElement;
  let prompt = "tran-engineering.ch>";
  let spawnPosition;

  const emulator = new Terminal.Emulator();

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
    spawnPosition = cursorElement.getBoundingClientRect();
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
      <span>{input}</span><span bind:this={cursorElement} class="cursor">_</span>
      <input
        id="input"
        type="text"
        autofocus
        bind:value={input}
        on:keydown={handleSpecialKeys}
        bind:this={inputElement}
      />
    </div>
  </form>
  <GravityWell cursorElement={cursorElement} />
</div>

<style>
  .container {
    padding: 2em;
    color: #999;
    background-color: #222;
    font-size: 1rem;
    line-height: 1.2em;
    overflow: auto;
  }

  input {
    outline: none;
    border: none;
    color: transparent;
    background-color: transparent;
    width: 1px;
    height: 1px;
  }

  .input {
    display: flex;
    flex-direction: row;
  }

  .cursor {
    animation: cursor-fade 1s ease-in-out infinite reverse;
  }

  @keyframes cursor-fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .container {
    flex: 1 1;
  }
</style>
