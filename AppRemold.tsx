import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import NovaRotaScreen from './src/screens/NovaRotaScreen';
import RegistrarRD from './src/screens/RegistrarRD';
import AgendarVisita from './src/screens/AgendarVisita';
import Historico from './src/screens/Historico';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NovaRota" component={NovaRotaScreen} />
        <Stack.Screen name="RegistrarRD" component={RegistrarRD} />
        <Stack.Screen name="AgendarVisita" component={AgendarVisita} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
