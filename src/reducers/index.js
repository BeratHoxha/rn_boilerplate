import { combineReducers } 
  from 'redux';

import currentUserReducer 
  from './currentUser';

import languageReducer 
  from './language';

const appReducer = combineReducers({
  current_user: currentUserReducer,
  language: languageReducer
});

export default appReducer;


