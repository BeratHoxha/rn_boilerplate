import { NavigationActions, StackActions } from 'react-navigation';

import removeToken
  from '../services/removeToken'

import { LOG_OUT }
  from '../constants'

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if(routeName == 'AuthStackNavigator'){
    removeToken()
  }
  
  _navigator.dispatch({
      type: LOG_OUT,
  })

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset(routeName, params) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: routeName,
          params: params
        })
      ]
    })
  )
}


export default {
  navigate,
  setTopLevelNavigator,
  reset
};
