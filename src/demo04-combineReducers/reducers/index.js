import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';

// Step2 combine 多個 reducer
const rootReducer = combineReducers({
  counter,
  user
});

export default rootReducer;