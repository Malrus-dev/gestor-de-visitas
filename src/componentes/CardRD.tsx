import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardRDProps {
  nome: string;
  local: string;
  horario: string;
  km: string;
}

export default function CardRD({ nome, local, horario, km }: CardRDProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.texto}>Local: {local}</Text>
      <Text style={styles.texto}>Horário: {horario}</Text>
      <Text style={styles.texto}>KM: {km}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  texto: {
    fontSize: 14,
  },
});
