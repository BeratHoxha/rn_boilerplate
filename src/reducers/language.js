import { CHANGE_LANGUAGE }
  from '../constants';

export default function(state='en', action){
  switch(action.type){
    case CHANGE_LANGUAGE:
      return action.payload
    default:
      return state
  }
}
