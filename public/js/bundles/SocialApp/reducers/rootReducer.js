import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import posts from './posts';
import carousles from './carousles'

const rootReducer = combineReducers({
  posts: posts,
  toastr: toastrReducer,
  carousles: carousles,
});

export default rootReducer;
