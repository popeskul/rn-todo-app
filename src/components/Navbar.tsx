import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { AppTextBold } from './UI/AppTextBold';
import { THEME } from '../theme';

interface Props {
  title: string;
}

export const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          android: styles.navbarAndroid,
          ios: styles.navbarIos,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarAndroid: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
    fontSize: 20,
  },
});
