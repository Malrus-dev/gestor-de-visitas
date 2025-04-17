import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function RotaEmAndamento() {
  const route = useRoute();
  const navigation = useNavigation();
  const { rota } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Rota em andamento:</Text>
      <Text>Cidade: {rota.cidade}</Text>
      <Text>Bairro: {rota.bairro}</Text>
      <Text>KM Inicial: {rota.kmInicial}</Text>
      <Text>Hora de Início: {rota.horaInicio}</Text>

      <Button title="Registrar Visita (RD)" onPress={() => navigation.navigate('RegistrarRD', { rota })} />
      <Button title="Finalizar Rota" onPress={() => navigation.navigate('FinalizarRota', { rota })} />
    </View>
  );
}
