import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Gestor de Visitas</Text>
      <Button title="Iniciar Rota" onPress={() => navigation.navigate('NovaRota')} />
      <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
      <Button title="RDs" onPress={() => navigation.navigate('RDs')} />
      <Button title="Agendamentos" onPress={() => navigation.navigate('Agendamentos')} />
    </View>
  );
}
