import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {ms} from 'react-native-size-matters';
interface Props {
  length?: number;
  horizontal?: boolean;
}
const Spacer: React.FC<Props> = ({length = ms(8), horizontal = false}) => {
  return (
    <View
      style={{
        height: horizontal ? 0 : length,
        width: horizontal ? length : 0,
      }}></View>
  );
};
export default memo(Spacer);
