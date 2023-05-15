import {View, Text, StyleSheet, Image} from 'react-native';
import React, {memo} from 'react';
import {ms} from 'react-native-size-matters';
import {IconMobile} from '../assets/icons';
import Spacer from './Spacer';
import {Typography} from '../assets/theme/Typography';
import {BorderGrey, Red, White} from '../assets/theme/Colors';
interface Props {
  count?: number;
}
const Header: React.FC<Props> = ({count}) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Image resizeMode="stretch" style={styles.image} source={IconMobile} />
        <Spacer horizontal length={ms(21.33)} />
        <View>
          <Text style={[Typography.h1, {color: White}]}>Product List</Text>
          {count && (
            <>
              <Spacer length={ms(5)}/>
              <Text style={[Typography.h2, {color: White}]}>
                {count} Products
              </Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: ms(131),
    backgroundColor: White,
padding:ms(24),
    justifyContent: 'center',
    paddingHorizontal: ms(20),
    borderTopWidth:1,borderColor:BorderGrey,position:'absolute',bottom:0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: ms(18.67),
    height: ms(29.33),
  },
});
export default memo(Header);
