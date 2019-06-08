import axios 
  from 'axios';

import NavigationService 
  from './navigationService';

import { 
  BASE_URL, 
} from '../constants';

import { 
  AsyncStorage
} from 'react-native';

export const getToken = async () => {
  const value = await AsyncStorage.getItem('token');

  return value
};

let api = axios.create({
  baseURL: BASE_URL,
  
  validateStatus: function (status) {
    switch(status) {
      case 200:
      case 201:
      return true;
      case 401:
      NavigationService.navigate('AuthStackNavigator');
      default:
      return true;
    }
  },

  responseType: "json"
});

api.interceptors.request.use(
  async config => {
    const token = await getToken();

    var headers = JSON.parse(token);
    
    if (token) {
      config.headers = { ...config.headers, ...headers } ;
    }

    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use((response) => {
  switch(response.status) {
    case 200:
    case 201:
    return { ...response.data, headers: response.headers } ;
    case 401:
    NavigationService.navigate('AuthScreens');
    default:
    return Promise.reject({data: response.data || {}, 
                           status: response.status});
  }
});

//api.interceptors.request.use(request => {
//  console.log('Starting Request', request)
//  return request
//})

export default api;
