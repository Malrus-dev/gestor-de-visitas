import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputTextoProps {
  valor: string;
  aoMudar: (texto: string) => void;
  placeholder?: string;
}

export default function InputTexto({ valor, aoMudar, placeholder }: InputTextoProps) {
  return (
    <TextInput
      style={styles.input}
      value={valor}
      onChangeText={aoMudar}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
