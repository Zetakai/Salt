import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import useVM from './menu.vm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Background, Grey} from '../../assets/theme/Colors';
import {ms} from 'react-native-size-matters';
import Divider from '../../components/Divider';
import {Sort} from '../../assets/icons';
import {Typography} from '../../assets/theme/Typography';
import Button from '../../components/SortButton';
import SortButton from '../../components/SortButton';
import Row from '../../components/Row';

const Menu: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Background,
      }}>
      <Header count={3} />
      <View style={styles.mainContainer}>
        <View style={styles.sortContainer}>
          <Row>
            <Image style={styles.sort} source={Sort} />
            <Text style={[Typography.h2, {color: Grey, marginLeft: ms(8)}]}>
              Sort By:
            </Text>
          </Row>
          <SortButton title='Default'/>
        </View>
        <Divider />
      </View>
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: ms(20),
    paddingTop: ms(9),
  },
  sortContainer: {
    paddingVertical: ms(23),
    flexDirection: 'row',justifyContent:'space-between'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    width: ms(12),
    height: ms(12),
  },
});
export default Menu;
