export function formatarDataAtual(): string {
    const agora = new Date();
    return agora.toISOString().split('T')[0]; // YYYY-MM-DD
}
  
  export function formatarHoraAtual(): string {
    const agora = new Date();
    return agora.toTimeString().split(' ')[0]; // HH:MM:SS
}
  