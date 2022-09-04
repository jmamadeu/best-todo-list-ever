import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme/colors';

import { AddButton } from '~/components/add-button/add-button';
import { Header } from '~/components/header/header';
import { TextInput } from '~/components/text-input/text-input';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.searchForm}>
          <View style={styles.inputContainer}>
            <TextInput />
          </View>
          <AddButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600]
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -27
  },
  inputContainer: {
    flex: 1,
    marginRight: 4
  },
  searchForm: {
    flexDirection: 'row'
  }
});
