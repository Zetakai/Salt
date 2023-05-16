import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Button from '../Button';
import {ms} from 'react-native-size-matters';
import {Total, White} from '../../assets/theme/Colors';
import {Typography} from '../../assets/theme/Typography';
import Spacer from '../Spacer';

interface Props {
  modalVisible: boolean;
  setModalVisible(x: boolean): void;
  quantity?: number;
  total?: number;
  checkout(): void;
  isCheckingout?: boolean;
}

const Popup: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  quantity,
  total,
  checkout,
  isCheckingout = true,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {isCheckingout ? (
            <View style={styles.modalView}>
              <Text style={[Typography.h1, {color: Total}]}>Success!</Text>
              <Spacer length={ms(14)} />
              <Text
                style={[Typography.h2, {color: Total, textAlign: 'center'}]}>
                You have successfully purchase {quantity} products with total of
                $ {total}. Click close to buy another modems
              </Text>
              <Spacer length={ms(24)} />

              <Button
                title="Close"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  checkout();
                }}></Button>
            </View>
          ) : (
            <View style={styles.modalViewLoading}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: ms(24),
  },
  modalView: {
    width: '100%',
    backgroundColor: White,
    borderRadius: ms(16),
    padding: ms(24),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewLoading: {
    backgroundColor: White,
    borderRadius: ms(16),
    padding: ms(24),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Popup;
