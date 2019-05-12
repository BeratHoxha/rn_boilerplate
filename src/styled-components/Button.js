import React 
  from 'react';
import { Dimensions } 
  from 'react-native'
import styled 
  from 'styled-components';
import FontFamily
  from '../constants/FontFamily'
  
import { 
  calculateVerticalSize,
  calculateHorisontalSize
} from '../assets/style/ResponsiveSize'

export const Button = styled.TouchableOpacity`
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
  height: ${props => calculateVerticalSize(props.height) || 
                     calculateVerticalSize(52) };
  background-color: ${props => props.backgroundColor || '#ff0844' };
  border-width: ${ props => props.borderWidth || 0 };
  border-color: ${ props => props.borderColor || 'transparent' };
  margin-top: ${ props => calculateVerticalSize(props.top) || 0};
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  fontSize: ${props => props.fontSize || 16};
  color: ${props => props.color || '#ffff' };
  font-family: ${FontFamily};
`

