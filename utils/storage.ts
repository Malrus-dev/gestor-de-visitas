export function salvarJSON<T>(chave: string, dado: T): void {
    localStorage.setItem(chave, JSON.stringify(dado));
}
  
export function carregarJSON<T>(chave: string, padrao: T): T {
    const dado = localStorage.getItem(chave);
    if (!dado) return padrao;
    try {
        return JSON.parse(dado);
    } catch {
        return padrao;
    }
}
  