import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DrawScreen from './src/screens/DrawScreen';
import SavedScreen from './src/screens/SavedScreen';
import { COLORS } from './src/constants/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: COLORS.accent,
          }}
        >
          <Tab.Screen
            name="Draw"
            component={DrawScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shapes-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Saved"
            component={SavedScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="albums-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
