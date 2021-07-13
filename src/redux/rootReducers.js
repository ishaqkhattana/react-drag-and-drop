import { combineReducers } from "redux";
import  puzzleReducer  from './puzzle/reducers';


const rootReducers = combineReducers({
    puzzle: puzzleReducer
});

export default rootReducers;
