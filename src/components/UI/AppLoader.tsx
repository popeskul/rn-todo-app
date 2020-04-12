import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const AppLoader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
