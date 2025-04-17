import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Historico() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Visitas</Text>
      <Text>RDs anteriores aparecerão aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});
