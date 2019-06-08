import { AsyncStorage } from 'react-native';

export default (token) => {
  
  // headers = JSON.stringify({
  //   'Access-Token': token["access-token"],
  //   Client: token.client,
  //   Uid: token.uid
  // })

  AsyncStorage.setItem('token', token);
}
