import Component from './Component.svelte'

export default {
  function: () => {

    return {
      output: {
        type: "contact",
        content: {},
        component: Component
      },
    };
  },
  optDef: {},
};
