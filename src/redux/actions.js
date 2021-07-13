const actions = {
    INITIALIZE: "INITIALIZE",
    DROP: "DROP",
  
    initializeArray: data => {
      return {
        type: actions.INITIALIZE,
        payload: data
      };
    },
  
    handleDrop: data => {
      return {
        type: actions.DROP,
        payload: data
      };
    },
  };
  
  export default actions;