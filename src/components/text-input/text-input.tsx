import { useReducer } from 'react';
import type { TextInputProps } from 'react-native';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';

import { colors } from '~/theme/colors';

export const TextInput: React.FC<TextInputProps> = (props) => {
  const [hasFocus, toggleFocus] = useReducer((isFocused) => !isFocused, false);

  return (
    <RNTextInput
      style={[styles.input, hasFocus && styles.hasFocus]}
      placeholder="Add a new task"
      placeholderTextColor={colors.gray[300]}
      showSoftInputOnFocus
      allowFontScaling
      onFocus={toggleFocus}
      onBlur={toggleFocus}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray[500],
    borderColor: colors.gray[700],
    borderWidth: 1,
    width: '100%',
    height: 54,
    borderRadius: 6,
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    paddingLeft: 16
  },
  hasFocus: {
    borderColor: colors.purpleDark
  }
});
