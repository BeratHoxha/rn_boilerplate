import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux';

import reducers 
  from '../reducers';

import reduxThunk 
  from 'redux-thunk'

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;

