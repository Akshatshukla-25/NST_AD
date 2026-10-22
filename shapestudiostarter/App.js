import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrawScreen from './src/screens/DrawScreen';
import { COLORS } from './src/constants/theme';

// TODO (Task 1): Replace this with React Navigation.
//   - Wrap the app in <NavigationContainer>.
//   - Create a bottom tab navigator with two tabs:
//       "Draw"  -> DrawScreen
//       "Saved" -> a stack navigator (see Task 2)
//   - The tab navigator draws its own header and handles safe areas,
//     so you can remove the SafeAreaView and the header below.
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Text style={styles.title}>Shape Studio</Text>
        </View>
        <DrawScreen />
      </SafeAreaView>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.ink,
  },
});
