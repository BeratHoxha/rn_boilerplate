import { StyleSheet } 
  from 'react-native'

import {
  calculateHorisontalSize, 
  calculateVerticalSize
} from './ResponsiveSize'

import columnPositions 
  from './helpers/positions/column'

import rowPositions 
  from './helpers/positions/row'

import container 
  from './helpers/container'

const styles = StyleSheet.create({
  ...columnPositions,
  ...rowPositions,
  container: container,
});

export default styles;

