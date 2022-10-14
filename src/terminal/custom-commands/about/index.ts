import Component from './Component.svelte'

export default {
  function: () => {

    return {
      output: {
        type: "about",
        content: {},
        component: Component
      },
    };
  },
  optDef: {},
};
