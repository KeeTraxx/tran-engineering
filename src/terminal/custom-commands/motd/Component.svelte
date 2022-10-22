<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  export let content;

  let logoElement: HTMLPreElement;

  onMount(() => {
    logoElement.innerHTML = logoElement.innerHTML.replaceAll(/([^\s])/g, '<span>$1</span>' );
    d3.select(logoElement)
      .selectAll('span')
      .style('display', 'inline-block')
      .style('transform', (_, i) => `translate(400px, ${50 * (i%2 == 0 ? 1 : -1)}px)`)
      .style('opacity', 0)
      .transition()
      .duration(800)
      .delay((_, i) => i * 10)
      .style('opacity', null)
      .style('transform', null)
      .transition()
      .delay(300)
      .style('color', 'white')
      .transition()
      .style('color', (_, i) => d3.color('#0f0').darker(i * 0.01));
  });


  function dance() {
    d3.select(logoElement)
      .selectAll('span')
      .transition('dance')
      .style('transform', (_, i) => 'scale(1.5) rotate(2.5turn)')
      .transition('dance')
      .style('transform', (_, i) => null);
  }
</script>
<pre bind:this={logoElement} style="overflow: auto;" on:click={() => dance()}>

   _                                        (_)                      (_)            
  | |_   ____ ____ ____ ___ ____ ____   ____ _ ____   ____ ____  ____ _ ____   ____ 
  |  _) / ___) _  |  _ (___) _  )  _ \ / _  | |  _ \ / _  ) _  )/ ___) |  _ \ / _  |
  | |__| |  ( ( | | | | | ( (/ /| | | ( ( | | | | | ( (/ ( (/ /| |   | | | | ( ( | |
   \___)_|   \_||_|_| |_|  \____)_| |_|\_|| |_|_| |_|\____)____)_|   |_|_| |_|\_|| |
                                      (_____|                                (_____|

</pre>

<div>
Available commands: <a href="#about">about</a>, <a href="#contact">contact</a>, <a href="#sbb">sbb</a>

</div>