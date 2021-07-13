import actions from './actions';

const { initializeArray, handleDrop, updateGroups} = actions;

//Everytime user inputs a number, this is called
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

//Dispatched each time a block is dropped
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

//Initially as well as on each drop, the rows are changed and so this is dispatched to update them
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