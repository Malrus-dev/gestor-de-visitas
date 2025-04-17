import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function NovaRotaScreen() {
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [kmInicial, setKmInicial] = useState('');

  const iniciarRota = () => {
    if (!cidade || !bairro || !kmInicial) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    Alert.alert(`Rota iniciada em ${bairro}, ${cidade}, com ${kmInicial} km`);
    // Lógica de geração de rota inteligente virá aqui
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cidade:</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

      <Text style={styles.label}>Bairro:</Text>
      <TextInput style={styles.input} value={bairro} onChangeText={setBairro} />

      <Text style={styles.label}>KM Atual do Veículo:</Text>
      <TextInput style={styles.input} value={kmInicial} onChangeText={setKmInicial} keyboardType="numeric" />

      <Button title="Iniciar Rota" onPress={iniciarRota} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10
  }
});
