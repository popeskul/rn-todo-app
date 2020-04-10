import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './UI/AppButton';

export const EditModal = ({ value, visible, onCancel, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandle = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Plese type more or equale then 3. Now you have ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Type text'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />

        <View style={styles.buttons}>
          <AppButton color={THEME.DANGER_COLOR} onPress={cancelHandler}>
            Cancel
          </AppButton>
          <AppButton color={THEME.SUCCES_COLOR} onPress={saveHandle}>
            Save
          </AppButton>
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
