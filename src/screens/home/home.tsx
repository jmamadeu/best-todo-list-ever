import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme/colors';

import { Header } from '~/components/header/header';
import { TextInput } from '~/components/text-input/text-input';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600]
  },
  inputContainer: {
    paddingHorizontal: 24,
    marginTop: -27
  }
});
