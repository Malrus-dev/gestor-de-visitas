import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatarHoraAtual } from '../utils/data';

export default function NovaRota() {
  const navigation = useNavigation();
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [kmAtual, setKmAtual] = useState('');

  const iniciarRota = () => {
    if (!cidade || !bairro || !kmAtual) return alert('Preencha todos os campos.');
    const inicio = {
      cidade,
      bairro,
      kmInicial: kmAtual,
      horaInicio: formatarHoraAtual(),
    };
    navigation.navigate('RotaEmAndamento', { rota: inicio });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Selecione a Cidade</Text>
      <TextInput placeholder="Cidade" value={cidade} onChangeText={setCidade} />
      <Text>Bairro</Text>
      <TextInput placeholder="Bairro" value={bairro} onChangeText={setBairro} />
      <Text>KM Atual do Veículo</Text>
      <TextInput placeholder="Ex: 1234" keyboardType="numeric" value={kmAtual} onChangeText={setKmAtual} />
      <Button title="Começar Rota" onPress={iniciarRota} />
    </View>
  );
}
