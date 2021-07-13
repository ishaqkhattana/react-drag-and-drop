const actions = {
    INITIALIZE: "INITIALIZE",
    DROP: "DROP",
    UPDATE_GROUPS: "UPDATE_GROUPS",
  
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

    updateGroups: data => {
      return {
        type: actions.UPDATE_GROUPS,
        payload:data
      }
    }
  };
  
  export default actions;