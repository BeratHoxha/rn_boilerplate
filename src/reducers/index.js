import { combineReducers } 
  from 'redux';

import currentUserReducer 
  from './currentUser';

const appReducer = combineReducers({
  current_user: currentUserReducer,
});

export default appReducer;


