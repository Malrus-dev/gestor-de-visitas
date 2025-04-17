import AsyncStorage from '@react-native-async-storage/async-storage';

export async function salvarDados(chave: string, dados: any) {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(dados));
  } catch (erro) {
    console.error('Erro ao salvar:', erro);
  }
}

export async function carregarDados(chave: string) {
  try {
    const valor = await AsyncStorage.getItem(chave);
    return valor ? JSON.parse(valor) : null;
  } catch (erro) {
    console.error('Erro ao carregar:', erro);
    return null;
  }
}
