import { AntDesign } from '@expo/vector-icons';
import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '~/theme/colors';

type AddButtonProps = TouchableOpacityProps;

export const AddButton: React.FC<AddButtonProps> = (props) => (
  <TouchableOpacity style={styles.button} {...props} activeOpacity={0.8}>
    <AntDesign name="pluscircleo" size={18} color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blueDark,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  }
});
