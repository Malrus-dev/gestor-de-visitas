import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import IniciarRota from './screens/IniciarRota';
import RegistrarRD from './screens/RegistrarRD';
import FinalizarRota from './screens/FinalizarRota';
import Historico from './screens/Historico';
import RDs from './screens/RDs';
import Agendamentos from './screens/Agendamentos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Gestor de Visitas' }} />
        <Stack.Screen name="IniciarRota" component={IniciarRota} options={{ title: 'Iniciar Rota' }} />
        <Stack.Screen name="RegistrarRD" component={RegistrarRD} options={{ title: 'Registrar RD' }} />
        <Stack.Screen name="FinalizarRota" component={FinalizarRota} options={{ title: 'Finalizar Rota' }} />
        <Stack.Screen name="Historico" component={Historico} options={{ title: 'Histórico' }} />
        <Stack.Screen name="RDs" component={RDs} options={{ title: 'RDs' }} />
        <Stack.Screen name="Agendamentos" component={Agendamentos} options={{ title: 'Agendamentos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
