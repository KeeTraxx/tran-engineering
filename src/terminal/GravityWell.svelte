<script lang="ts">
  import { onMount } from "svelte";

  export let cursorElement: HTMLElement;
  let letters = [];

  export function spawn(key): any {
    const spawnPosition = cursorElement.getBoundingClientRect();
    letters.push({
      letter: key,
      x: spawnPosition.x,
      y: spawnPosition.y,
      r: 0,
      vx: Math.random() * 10 - 5,
      vy: -Math.random() * 7,
      vr: Math.random() * 3,
      bounces: 0,
    });
    letters = [...letters];
  }

  function tick() {
    requestAnimationFrame(() => {
      letters = [
        ...letters
          .map((l) => {
            if (l.x < 0 || l.x > window.innerWidth) {
              l.vx *= -0.5;
              l.bounces++;
            }

            if (l.y > window.innerHeight && l.vy > 0) {
              l.vy *= -0.5;
              l.bounces++;
            }

            return {
              ...l,
              x: l.x + l.vx,
              y: l.y + l.vy,
              vy: l.vy + 0.2,
              r: l.r + l.vr,
            };
          })
          .filter(({ bounces }) => bounces < 8),
      ];
      tick();
    });
  }

  onMount(() => tick());
</script>

{#each letters as letter}
  <div
    style:left={letter.x + "px"}
    style:top={letter.y + "px"}
    style:transform={`rotate(${letter.r}deg)`}
  >
    {letter.letter}
  </div>
{/each}

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
