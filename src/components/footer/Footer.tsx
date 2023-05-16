import {View, Text, StyleSheet, Image} from 'react-native';
import React, {memo} from 'react';
import {ms} from 'react-native-size-matters';
import {IconMobile} from '../../assets/icons';
import Spacer from '../Spacer';
import {Typography} from '../../assets/theme/Typography';
import {BorderGrey, Grey, Red, Total, White} from '../../assets/theme/Colors';
import Row from '../Row';
import Button from '../Button';
interface Props {
  total: number;
  onPressCheckout():void
  resetTransaction():void
}
const Footer: React.FC<Props> = ({total,onPressCheckout,resetTransaction}) => {
  return (
    <View style={styles.box}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={[Typography.total, {color: Total}]}>Total:</Text>
        <Text style={[Typography.total, {color: Total}]}>$ {total}</Text>
      </View>
      <Spacer length={ms(17)} />
      
          <Button backgroundColor={Grey} title="Checkout" onPress={onPressCheckout} isDisabled={total===0} disabled={total===0}/>
          <Spacer length={ms(11)} />
        {total > 0 && (
        <>
      <Button onPress={resetTransaction} backgroundColor={White} title="Reset" />
      </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    backgroundColor: White,
    paddingHorizontal: ms(24),
    paddingVertical: ms(23),
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
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
export default memo(Footer);
