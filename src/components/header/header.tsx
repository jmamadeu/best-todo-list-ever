import { StyleSheet, View } from 'react-native';

import { LogoSVG } from '~/assets/logo';
import { colors } from '~/theme/colors';

export const Header = () => (
  <View style={styles.container}>
    <LogoSVG />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    height: 180,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
