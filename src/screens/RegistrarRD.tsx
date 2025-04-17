import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegistrarRD() {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
  const [notas, setNotas] = useState('');

  const registrar = () => {
    console.log('RD registrada:', nomeEstabelecimento, notas);
    // GPS, hora, cidade, bairro, km atual e tipo de RD também seriam incluídos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Estabelecimento:</Text>
      <TextInput style={styles.input} value={nomeEstabelecimento} onChangeText={setNomeEstabelecimento} />

      <Text style={styles.label}>Notas:</Text>
      <TextInput style={styles.input} value={notas} onChangeText={setNotas} multiline numberOfLines={4} />

      <Button title="Gerar RD" onPress={registrar} />
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
