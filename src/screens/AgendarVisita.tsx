import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AgendarVisita() {
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');

  const agendar = () => {
    console.log('Agendado:', local, data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Local:</Text>
      <TextInput style={styles.input} value={local} onChangeText={setLocal} />

      <Text style={styles.label}>Data da Visita (AAAA-MM-DD):</Text>
      <TextInput style={styles.input} value={data} onChangeText={setData} />

      <Button title="Agendar" onPress={agendar} />
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
