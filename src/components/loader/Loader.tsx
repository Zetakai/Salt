import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Typography} from '../../assets/theme/Typography';
import {Grey, GreyDesc} from '../../assets/theme/Colors';
import Spacer from '../Spacer';
import {IconMobile} from '../../assets/icons';
import {ms} from 'react-native-size-matters';

export default function Loader() {
  return (
    <View style={styles.loadingContainer}>
      <Image
        style={styles.loadingImage}
        resizeMode="stretch"
        source={IconMobile}
      />
      <Spacer length={ms(28.06)} />
      <Text style={[Typography.h1, {color: Grey}]}>Loading Product Data</Text>
      <Spacer length={ms(10)} />
      <Text style={[Typography.h2, {color: GreyDesc}]}>Please wait...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingImage: {tintColor: Grey, width: ms(48), height: ms(75.94)},
});
