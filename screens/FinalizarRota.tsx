import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formatarHoraAtual } from '../utils/data';

export default function FinalizarRota() {
  const route = useRoute();
  const navigation = useNavigation();
  const { rota } = route.params;
  const [kmFinal, setKmFinal] = useState('');

  const finalizar = () => {
    if (!kmFinal) return alert('Informe o KM final.');
    const resumo = {
      ...rota,
      horaFim: formatarHoraAtual(),
      kmFinal,
    };

    console.log('Rota finalizada:', resumo);
    alert('Rota finalizada com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Finalizar Rota</Text>
      <Text>KM Final do Veículo</Text>
      <TextInput placeholder="Ex: 1340" value={kmFinal} onChangeText={setKmFinal} keyboardType="numeric" />
      <Button title="Finalizar" onPress={finalizar} />
    </View>
  );
}
