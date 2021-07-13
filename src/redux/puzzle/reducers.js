import actions from "./actions";

const { INITIALIZE, DROP, UPDATE_GROUPS } = actions;

const initialState = {
  pieces: [],
  userInput: null,
  groups: [],
  ordered: [],
  isFinalState: false,
};

const shuffle = (data) => {
  const shuffled = [...data];

  // Durstenfeld shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const artistReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case INITIALIZE:
      console.log(`============INITIALZIING============`);
      var arr = [];
      var counter = 1;
      for (var i = 0; i < payload.target.value; i++) {
        for (var j = 0; j < payload.target.value; j++) {
          arr.push(counter);
          counter++;
        }
      }
      return {
        ...state,
        pieces: shuffle(arr),
        userInput: payload.target.value,
        ordered: arr,
      };
    case DROP:
      console.log(`============Handling Drop============`);
      var indexOfFirst = state.pieces.indexOf(parseInt(payload.firstVal));
      var indexOfSecond = state.pieces.indexOf(parseInt(payload.secondVal));
      state.pieces[indexOfFirst] = parseInt(payload.secondVal);
      state.pieces[indexOfSecond] = parseInt(payload.firstVal);
      var tempArr = [...state.pieces];
      if (JSON.stringify(state.pieces) == JSON.stringify(state.ordered)) {
        alert("Welcome to the team");
        return { ...state, pieces: tempArr, isFinalState: true };
      } else {
        return { ...state, pieces: tempArr, isFinalState: false };
      }
    case UPDATE_GROUPS:
      return { ...state, groups: payload };
    default:
      return state;
  }
};

export default artistReducer;
