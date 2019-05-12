import React from 'react'
import { Button, ButtonText } 
  from '../../styled-components'

const ButtonComponent = (props) => { 
  var { fontSize,
    color,
    label, 
    onPress,
    icon } = props;

  return (
    <Button {...props}
      onPress={onPress} >
      { icon && icon }
      <ButtonText
        fontSize={fontSize}
        color={color} >
        { label } 
      </ButtonText>
    </Button>
  )
}

export default ButtonComponent
