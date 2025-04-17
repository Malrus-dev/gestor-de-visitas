import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoProps {
  titulo: string;
  onPress: () => void;
  cor?: string;
}

export default function Botao({ titulo, onPress, cor = '#007bff' }: BotaoProps) {
  return (
    <TouchableOpacity style={[styles.botao, { backgroundColor: cor }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
