import React from 'react';
import { View, StyleSheet, Button, Modal, TextInput } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, onSave }) => {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder='Type text'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />

        <View style={styles.buttons}>
          <Button
            title='Cancel'
            color={THEME.DANGER_COLOR}
            onPress={onCancel}
          />
          <Button title='Save' color={THEME.SUCCES_COLOR} onPress={onSave} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
    marginBottom: 20,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
