import { combineReducers } from 'redux';
import global from './global/reducer';
import summary from './summary/reducer';
import countries from './countries/reducer';

const rootReducer = combineReducers({
  global,
  summary,
  countries,
});

export default rootReducer;
