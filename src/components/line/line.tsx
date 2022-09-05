import { StyleSheet, View } from 'react-native';

import { colors } from '~/theme/colors';

export const Line = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: colors.gray[400],
    borderWidth: 1
  }
});
