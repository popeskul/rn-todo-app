import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../theme';

interface IProps {
  onPress: () => void;
  color?: string;
  style?: object;
  children: React.ReactNode;
}

export const AppButton: React.FC<IProps> = ({
  children,
  onPress,
  style,
  color = THEME.MAIN_COLOR,
}) => {
  const Wrapper: any =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color, ...style }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
