import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestor de Visitas</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('NovaRota')}>
        <Text style={styles.textoBotao}>Iniciar Rota</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('RegistrarRD')}>
        <Text style={styles.textoBotao}>Registrar RD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AgendarVisita')}>
        <Text style={styles.textoBotao}>Agendar Visita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Historico')}>
        <Text style={styles.textoBotao}>Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  botao: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, marginBottom: 15 },
  textoBotao: { color: '#fff', fontSize: 16, textAlign: 'center' }
});
