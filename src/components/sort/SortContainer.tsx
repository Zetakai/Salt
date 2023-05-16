import {View, Text, StyleSheet, Image} from 'react-native';
import React, {memo, useState} from 'react';
import {Typography} from '../../assets/theme/Typography';
import {ms} from 'react-native-size-matters';
import {BorderGrey, Grey} from '../../assets/theme/Colors';
import Row from '../Row';
import SortButton from './SortButton';
import {IconSort} from '../../assets/icons';
interface Props {
  sort(sort: number): void;
  visible: boolean;
  setVisible(x: boolean): void;
  sortName: string;
  setSortName(x: string): void;
}
const SortContainer: React.FC<Props> = ({
  sort,
  visible,
  setVisible,
  setSortName,
  sortName,
}) => {
  const [pressedName, setPressedName] = useState(false);
  return (
    <View style={styles.sortContainer}>
      <Row>
        <Image style={styles.sort} source={IconSort} />
        <Text style={[Typography.h2, {color: Grey, marginLeft: ms(8)}]}>
          Sort By:
        </Text>
      </Row>
      <SortButton
        sortName={sortName}
        setSortName={setSortName}
        visible={visible}
        setVisible={setVisible}
        onPressHighest={() => sort(0)}
        onPressLowest={() => sort(1)}
        onPressName={() => {
          pressedName ? sort(2) : sort(3);
          setPressedName(!pressedName);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    marginHorizontal: ms(20),
    paddingVertical: ms(23),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: BorderGrey,
    borderBottomWidth: 1,
  },
  sort: {
    width: ms(12),
    height: ms(12),
  },
});
export default memo(SortContainer);
