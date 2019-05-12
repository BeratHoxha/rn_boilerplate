import React from 'react';
import { 
  createAppContainer,
  createSwitchNavigator 
} from 'react-navigation';

import MainTabNavigator 
  from './MainTabNavigator';
import InfoScreen 
  from '../screens/info';
import AuthStackNavigator 
  from './AuthStackNavigator'
import AppStackNavigator 
  from './AppStackNavigator'

import { 
  FluidNavigator,
  Transition,
  createFluidNavigator 
} from 'react-navigation-fluid-transitions'

const appNav = FluidNavigator({
    // InfoScreen,
    Main: AppStackNavigator,
    AuthScreens: AuthStackNavigator,
  },
  {
    mode: 'card',
    navigationOptions: { gesturesEnabled: false },
  }
);

export default createAppContainer(appNav)
