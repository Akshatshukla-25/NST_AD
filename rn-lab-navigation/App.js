import React from 'react';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TabNavigator from './src/navigation/Tabnavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <View>
      Hello
    </View>
  );
}
