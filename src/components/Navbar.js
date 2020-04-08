import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppTextBold } from './UI/AppTextBold';
import { THEME } from '../theme';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
