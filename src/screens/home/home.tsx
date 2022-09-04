import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme/colors';

import { Header } from '~/components/header/header';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[500]
  }
});
