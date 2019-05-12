import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// iphone X size 
const width  = 375;
const height = 812;

export function calculateHorisontalSize(size){
  var ptg = (size / width) * 100
  return wp(`${ptg}%`)
}

export function calculateVerticalSize(size){
  var ptg = (size / height) * 100
  return hp(`${ptg}%`)
}
