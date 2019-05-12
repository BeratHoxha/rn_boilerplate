import { TouchableOpacity, Text, View } from 'react-native'
import React, { Component } from 'react'

import {
  TextInput,
  InputSection,
  InputLabel
} from '../../styled-components'

const Input = (props) => {
  var { placeholderColor,
        reference,
        returnKeyType,
        labelText,
        value
  } = props;

  return (
    <View>
      { labelText &&
        <InputLabel>
          {labelText}
        </InputLabel>
      }
      <TextInput { ...props }
        value={value}
        autoCapitalize={"none"}
        placeholderTextColor =
          { placeholderColor || '#0f0f0f6b' }
        returnKeyType =
          { returnKeyType ||  "next" }
        underlineColorAndroid = 'transparent'
        ref={(ref) => reference && reference(ref)}
      />
    </View>
  )
}

export default Input
