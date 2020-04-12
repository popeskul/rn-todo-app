import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
  style?: object;
  children: React.ReactNode;
}

export const AppText: React.FC<IProps> = (props) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}1</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});
