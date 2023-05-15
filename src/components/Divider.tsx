import {View, Text} from 'react-native';
import React, {memo} from 'react';
import { ms } from 'react-native-size-matters';
import { BorderGrey } from '../assets/theme/Colors';

const Spacer: React.FC = () => {
  return <View style={{width:'100%',height:1,backgroundColor:BorderGrey}}></View>;
};
export default memo(Spacer);
