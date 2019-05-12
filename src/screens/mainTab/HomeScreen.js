import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>HOME SCREEN</Text>
      </View>
    );
  }
}

