import { combineReducers } from 'redux';
import global from './global/reducer';
import summary from './summary/reducer';

const rootReducer = combineReducers({
  global,
  summary,
});

export default rootReducer;
