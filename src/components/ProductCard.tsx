import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Typography } from '../assets/theme/Typography';
import { BorderGrey, DimGrey, Grey, GreyDesc, GreyWhite, White } from '../assets/theme/Colors';
import { ms } from 'react-native-size-matters';

interface Props {
    item: { id: number, title: string, price: number, stock: number,amount:number }
    updateAmount(id:number,amount:number):void
  }

const ProductCard:React.FC<Props> = ({item,updateAmount}) => {
  return (
    <>
      <View style={{marginHorizontal: ms(20), flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Text style={[Typography.h1, {color: Grey}]}>{item.title}</Text>
          <Text style={[Typography.h3, {color: GreyDesc}]}>$ {item.price}</Text>
        </View>
        <View
          style={{
            width: '50%',
            padding: ms(8),
            backgroundColor: GreyWhite,
            borderWidth: 1,
            borderColor: BorderGrey,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              updateAmount(item.id, -1);
            }}
            disabled={item.amount === 0}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: ms(32),
              height: ms(32),
              backgroundColor: item.amount === 0 ? DimGrey : Grey,
              borderRadius: ms(4),
            }}>
            <Text style={[Typography.h1, {color: White}]}>-</Text>
          </TouchableOpacity>
          <Text style={[Typography.h1, {color: Grey}]}>{item.amount}</Text>
          <TouchableOpacity
            onPress={() => {
              updateAmount(item.id, 1);
            }}
            disabled={item.amount === item.stock}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: ms(32),
              height: ms(32),
              backgroundColor: item.amount === item.stock ? DimGrey : Grey,
              borderRadius: ms(4),
            }}>
            <Text style={[Typography.h1, {color: White}]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProductCard;
