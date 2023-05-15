import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {memo} from 'react';
import {ms} from 'react-native-size-matters';
import {BorderGrey, Grey, GreyWhite, White} from '../assets/theme/Colors';
import Row from './Row';
import {Arrow} from '../assets/icons';
import {Typography} from '../assets/theme/Typography';
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  title: string;
}
const SortButton: React.FC<Props> = ({title, ...props}) => {
  return (<>
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={[Typography.h3, styles.title]}>{title}</Text>
      <Image style={styles.arrow} resizeMode="stretch" source={Arrow} />
    </TouchableOpacity>
    <View style={styles.listContainer}>

    </View>
    </>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: ms(14),
    flexDirection: 'row',
    backgroundColor: GreyWhite,
    height: ms(36),
    width: ms(108),
    alignItems:'center',justifyContent:'space-between',
    borderRadius:ms(8),borderWidth:1,borderColor:BorderGrey
  },
  title: {color: Grey},
  arrow: {width: ms(9), height: ms(4.5)},
  listContainer:{
    position:'absolute',
    bottom:-6,
    backgroundColor:White,width:ms(108),
  }
});
export default memo(SortButton);
