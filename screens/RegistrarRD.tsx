import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formatarHoraAtual } from '../utils/data';

export default function RegistrarRD() {
  const navigation = useNavigation();
  const route = useRoute();
  const { rota } = route.params;
  const [estabelecimento, setEstabelecimento] = useState('');
  const [observacao, setObservacao] = useState('');

  const salvarRD = () => {
    const novaRD = {
      cidade: rota.cidade,
      bairro: rota.bairro,
      estabelecimento,
      observacao,
      horario: formatarHoraAtual(),
    };

    console.log('RD registrada:', novaRD);
    alert('RD registrada com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Registrar RD</Text>
      <TextInput placeholder="Nome do Estabelecimento" value={estabelecimento} onChangeText={setEstabelecimento} />
      <TextInput placeholder="Observações" value={observacao} onChangeText={setObservacao} multiline />
      <Button title="Salvar RD" onPress={salvarRD} />
    </View>
  );
}
