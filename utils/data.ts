export function formatarDataAtual(): string {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
}
  
export function formatarHoraAtual(): string {
    const agora = new Date();
    return agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
  