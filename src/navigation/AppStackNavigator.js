import React from 'react';

import { 
  SafeAreaView, 
  createStackNavigator, 
  addNavigationHelpers 
} from 'react-navigation';

import MainTabNavigator 
  from './MainTabNavigator';

const MainStackNavigator = createStackNavigator(
  {
    MainTabNavigator,
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  }
);

class MainStackNav extends React.Component {
  static router = MainStackNavigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}
        forceInset={{ bottom: 'never' }} >
        <MainStackNavigator
          navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default MainStackNav;

