import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
  style: object;
  children: React.ReactNode;
}

export const AppTextBold: React.FC<IProps> = (props) => {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold',
  },
});
