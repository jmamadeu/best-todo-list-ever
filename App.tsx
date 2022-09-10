import {
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { TaskProvider } from '~/contexts/task-context';
import { HomeScreen } from '~/screens';

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter400Regular,
    'Inter-Bold': Inter700Bold
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TaskProvider>
        <HomeScreen />
      </TaskProvider>
      <StatusBar style="light" backgroundColor="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
