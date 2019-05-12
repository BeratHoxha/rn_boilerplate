import React from 'react';

import { 
  SafeAreaView, 
  createStackNavigator, 
  addNavigationHelpers 
} from 'react-navigation';

import LoginScreen  
  from '../screens/auth/Login'
import RegisterScreen 
  from '../screens/auth/Register'

const AuthStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      }
    },
  },
  {
    cardStyle: {
      backgroundColor: '#fff',
    },
    navigationOptions: () => ({
      header: false,
      swipeEnabled: false,
    }),
  }
);

class AuthStackNav extends React.Component {
  static router = AuthStackNavigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex:1, backgroundColor: '#fff'}} >
        <AuthStackNavigator
          navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default AuthStackNav;
