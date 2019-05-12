import { CURRENT_USER, LOG_OUT }
  from '../constants';

export default function(state={}, action){
  switch(action.type){
    case CURRENT_USER:
      return { ...state, ...action.payload }
    case LOG_OUT:
      return {}
    default:
      return state
  }
}


