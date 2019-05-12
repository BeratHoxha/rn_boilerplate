import React from 'react';
import {
  View,
} from 'react-native';

import { Text } 
  from '../../styled-components'
import { Button } 
  from '../../components/shared'
import { Input } 
  from '../../components/shared'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>HOME SCREEN</Text>
        <Button label="Label" top={20} />
        <Input labelText="Input Label" />
      </View>
    );
  }
}

