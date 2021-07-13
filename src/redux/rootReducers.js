import { combineReducers } from "redux";
import  puzzleReducer  from './reducers';


const rootReducers = combineReducers({
    puzzle: puzzleReducer
});

export default rootReducers;
