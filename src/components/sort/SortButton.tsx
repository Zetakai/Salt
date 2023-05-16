import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {ms} from 'react-native-size-matters';
import {BorderGrey, Grey, GreyWhite, White} from '../../assets/theme/Colors';
import {IconArrow} from '../../assets/icons';
import {Typography} from '../../assets/theme/Typography';
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  onPressHighest(): void;
  onPressLowest(): void;
  onPressName(): void;
  visible: boolean;
  setVisible(x: boolean): void;
  sortName: string;
  setSortName(x: string): void;
}
const SortButton: React.FC<Props> = ({
  onPressHighest,
  onPressLowest,
  onPressName,
  visible = false,
  setVisible,
  sortName = 'Default',
  setSortName,
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.buttonContainer}
        {...props}>
        <Text style={[Typography.h3, styles.title]}>{sortName}</Text>
        <Image style={styles.arrow} resizeMode="stretch" source={IconArrow} />
      </TouchableOpacity>
      {visible && (
        <View style={styles.listContainer}>
          <TouchableOpacity
            onPress={() => {
              setSortName('Highest Price');
              onPressHighest();
            }}>
            <Text style={[Typography.b1, styles.listText]}>Highest Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSortName('Lowest Price');
              onPressLowest();
            }}>
            <Text style={[Typography.b1, styles.listText]}>Lowest Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSortName('Name');
              onPressName();
            }}>
            <Text style={[Typography.b1, styles.listText]}>Name</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: ms(14),
    flexDirection: 'row',
    backgroundColor: GreyWhite,
    height: ms(36),
    width: ms(120),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: ms(8),
    borderWidth: 1,
    borderColor: BorderGrey,
  },
  title: {color: Grey},
  arrow: {width: ms(9), height: ms(4.5)},
  listContainer: {
    position: 'absolute',
    top: ms(42),
    backgroundColor: White,
    width: ms(108),
    height: ms(136),
    padding: ms(14),
  },
  listText: {
    color: Grey,
  },
});
export default memo(SortButton);
