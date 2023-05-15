import React from 'react';
import {View} from 'react-native'


interface Props extends React.ComponentProps<typeof View> {}

const Row: React.FC<Props> = ({ children, ...props}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center'}} {...props}>
      {children}
    </View>
    
  );
};

export default Row;
