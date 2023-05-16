import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {ms} from 'react-native-size-matters';
import {
  BorderGrey,
  Grey,
  GreyWhite,
  White,
  DimGrey,
} from '../assets/theme/Colors';
import Row from './Row';
import {Typography} from '../assets/theme/Typography';
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  title: string;
  backgroundColor?: string;
  isDisabled?: boolean | undefined;
}
const Button: React.FC<Props> = ({
  title,
  backgroundColor = Grey,
  isDisabled,
  ...props
}) => {
  return (

      <TouchableOpacity
        style={styles(backgroundColor, isDisabled).buttonContainer}
        {...props}>
        <Text style={[Typography.h3, styles(backgroundColor).title]}>
          {title}
        </Text>
      </TouchableOpacity>

  );
};
const styles = (backgroundColor: string, isDisabled?: boolean) =>
  StyleSheet.create({
    buttonContainer: {
      width: '100%',
      height: ms(42),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: ms(48),
      borderWidth: ms(2),
      borderColor: isDisabled ? DimGrey : Grey,
      backgroundColor:isDisabled?DimGrey: backgroundColor,
    },
    title: {
      color: backgroundColor === Grey || isDisabled ? White : Grey,
    },
  });

export default memo(Button);
