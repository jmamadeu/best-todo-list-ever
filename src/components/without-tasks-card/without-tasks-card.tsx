import { StyleSheet, Text, View } from 'react-native';

import { ClipBoardSVG } from '~/assets/clipboard';
import { colors } from '~/theme/colors';

export const WithoutTasksCard = () => (
  <View style={styles.container}>
    <ClipBoardSVG />

    <Text style={[styles.firstText, styles.text]}>You don't have any tasks</Text>
    <Text style={[styles.secondText, styles.text]}>Add new tasks and get the work done</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: {
    color: colors.gray[300],
    fontSize: 14
  },
  firstText: {
    fontFamily: 'Inter-Bold',
    marginTop: 16
  },
  secondText: {
    fontFamily: 'Inter-Regular'
  }
});
