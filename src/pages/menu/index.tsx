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
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useVM from './menu.vm';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  Background,
  BorderGrey,
  DimGrey,
  Grey,
  GreyDesc,
  GreyWhite,
  White,
} from '../../assets/theme/Colors';
import {ms} from 'react-native-size-matters';
import Divider from '../../components/Divider';
import {IconMobile} from '../../assets/icons';
import {Typography} from '../../assets/theme/Typography';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Spacer from '../../components/Spacer';
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/loader/Loader';
import Popup from '../../components/popup/Popup';
import SortContainer from '../../components/sort/SortContainer';

const Menu: React.FC = () => {
  const {
    productData,
    fetchProductList,
    loading,
    error,
    count,
    sort,
    updateAmount,
    getTotal,
    getQuantity,
    modalVisible,
    setModalVisible,
    visible,
    setVisible,
    resetTransaction,
    closeSort,
    sortName,
    setSortName,
  } = useVM();
  const total = getTotal(productData);
  useEffect(() => {
    fetchProductList();
  }, []);
  const renderLoading = useMemo(() => <Loader />, [loading]);
  const renderHeader = useCallback(
    (count: number | null) => (
      <View style={{backgroundColor: White}}>
        <Header count={count} />
        {productData.length > 0 && (
          <SortContainer
            setSortName={setSortName}
            sortName={sortName}
            visible={visible}
            setVisible={() => setVisible(!visible)}
            sort={sort}
          />
        )}
      </View>
    ),
    [loading, sort, productData],
  );
  const renderItem: ListRenderItem<any> = useCallback(
    ({item, index}) => {
      return (
        <>
          {index === 0 && <Spacer length={ms(32)} />}
          <ProductCard updateAmount={(x,y)=>{updateAmount(x,y);closeSort()}} item={item} />
        </>
      );
    },
    [updateAmount],
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList

        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader(count)}
        stickyHeaderIndices={[0]}
        contentContainerStyle={(productData.length>0)?{
          flexGrow: 1,
          paddingBottom:  total ? ms(226) : ms(173),
        }:{height:'100%',flexGrow:1}}
        data={productData}
        ItemSeparatorComponent={() => <Spacer length={ms(42)} />}
        renderItem={renderItem}
        initialNumToRender={10}
        keyExtractor={(item, index) => String(index)}
        ListEmptyComponent={renderLoading}
        extraData={productData}
      />
      {!loading && (
        <Footer
          total={total}
          onPressCheckout={() => setModalVisible(!modalVisible)}
          resetTransaction={resetTransaction}
        />
      )}
      <Popup
        quantity={getQuantity(productData)}
        total={total}
        modalVisible={modalVisible}
        checkout={() => resetTransaction()}
        setModalVisible={setModalVisible}
      />
      <Popup
        isCheckingout={false}
        modalVisible={loading}
        checkout={() => resetTransaction()}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Background,
  },
});
export default Menu;
