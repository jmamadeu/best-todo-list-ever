import { StyleSheet, View } from 'react-native';

import { colors } from '~/theme/colors';

export const Line = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    backgroundColor: colors.gray[400],
    height: 1
  }
});
