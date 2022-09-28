export default {
  function: (state, [from, to, time]) => {

    return {
      output: {
        type: "sbb",
        content: {from, to, time},
      },
    };
  },
  optDef: {},
};
