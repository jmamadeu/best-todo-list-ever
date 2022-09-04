import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[500]
  }
});
