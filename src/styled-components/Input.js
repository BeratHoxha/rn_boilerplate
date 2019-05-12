import styled 
  from 'styled-components';
import FontFamily
  from '../constants/FontFamily'
import {
  calculateVerticalSize,
  calculateHorisontalSize
} from '../assets/style/ResponsiveSize'

export const InputLabel = styled.Text`
  font-family: ${FontFamily};
  color: #0f0f0f;
  font-size: ${calculateVerticalSize(14)};
  margin-top: ${calculateVerticalSize(20)};
  font-weight: 300;
  opacity: 0.7;
`

export const TextInput = styled.TextInput`
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
  height: ${props => calculateVerticalSize(props.height)
             || calculateVerticalSize(52) };
  background-color: ${props => props.backgroundColor || 'transparent' };
  border-width: ${ props => props.borderWidth || 1 };
  border-color: ${ props => props.borderColor || '#e5e5e5' };
  font-size: ${ props => props.fontSize || 16 };
  font-family: ${ props => props.fontFamily || FontFamily }
  font-weight: ${ props => props.fontWeight || 300 };
  line-height: ${calculateVerticalSize(24)};
  color: ${ props => props.color || '#0f0f0f' };
`

