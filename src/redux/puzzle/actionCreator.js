import actions from './actions';

const { initializeArray, handleDrop, updateGroups} = actions;

const initialize = value => {
    return async dispatch => {
        try {
          dispatch(initializeArray(value));
        } catch (err) {
          const error = new Error("Problem initializing array acc to user input");
          error.inner = err;
          throw error;
        }
      };
};

const elementDrop = ({firstVal, secondVal} ) => {
  return async dispatch => {
    try {
      dispatch(handleDrop({firstVal, secondVal}))
    } catch (err) {
      const error = new Error("Problem initializing array acc to user input");
      error.inner = err;
      throw error;
    }
  }
}

const createGroups = value => {
  return async dispatch => {
      try {
        dispatch(updateGroups(value));
      } catch (err) {
        const error = new Error("Problem creating groups");
        error.inner = err;
        throw error;
      }
    };
};

export {
  initialize,
  elementDrop,
  createGroups
};