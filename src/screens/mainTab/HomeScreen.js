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

import styles
  from '../../assets/style'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={ styles.container}>
        <Text>HOME SCREEN</Text>
        <Button label="Label" top={20} />
        <Input labelText="Input Label" />
      </View>
    );
  }
}

