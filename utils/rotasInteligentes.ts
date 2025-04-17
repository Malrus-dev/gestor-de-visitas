export function gerarRotaSimulada(cidade: string, bairro: string) {
    // Em versão futura, integrar com banco de mapas offline
    return [
      { rua: 'Rua A', coordenadas: { lat: -12.9, long: -38.5 } },
      { rua: 'Rua B', coordenadas: { lat: -12.91, long: -38.52 } },
      { rua: 'Rua C', coordenadas: { lat: -12.92, long: -38.53 } },
    ];
}
  