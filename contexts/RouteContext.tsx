import React, { createContext, useContext, useState } from 'react';

interface RD {
  id: string;
  local: string;
  notas: string;
  coordenadas: string;
  checking: string;
  checkout?: string;
  km?: number;
  agendamento?: {
    data?: string;
    horario?: string;
    notas?: string;
  };
}

interface Rota {
  id: string;
  cidade: string;
  bairro: string;
  data: string;
  kmInicial: number;
  rds: RD[];
  finalizada?: boolean;
}

interface RouteContextData {
  rotaAtual: Rota | null;
  iniciarRota: (cidade: string, bairro: string, kmInicial: number) => void;
  adicionarRD: (rd: RD) => void;
  finalizarRota: (kmFinal: number) => void;
  rotasAnteriores: Rota[];
}

const RouteContext = createContext<RouteContextData>({} as RouteContextData);

export const useRoute = () => useContext(RouteContext);

export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rotaAtual, setRotaAtual] = useState<Rota | null>(null);
  const [rotasAnteriores, setRotasAnteriores] = useState<Rota[]>([]);

  const iniciarRota = (cidade: string, bairro: string, kmInicial: number) => {
    const novaRota: Rota = {
      id: Date.now().toString(),
      cidade,
      bairro,
      data: new Date().toLocaleDateString(),
      kmInicial,
      rds: []
    };
    setRotaAtual(novaRota);
  };

  const adicionarRD = (rd: RD) => {
    if (rotaAtual) {
      const atualizada = {
        ...rotaAtual,
        rds: [...rotaAtual.rds, rd]
      };
      setRotaAtual(atualizada);
    }
  };

  const finalizarRota = (kmFinal: number) => {
    if (rotaAtual) {
      const finalizada = {
        ...rotaAtual,
        finalizada: true,
        rds: [...rotaAtual.rds, {
          id: Date.now().toString(),
          local: rotaAtual.cidade,
          notas: 'Finalizando',
          coordenadas: '',
          checking: '',
          km: kmFinal
        }]
      };
      setRotasAnteriores([...rotasAnteriores, finalizada]);
      setRotaAtual(null);
    }
  };

  return (
    <RouteContext.Provider value={{ rotaAtual, iniciarRota, adicionarRD, finalizarRota, rotasAnteriores }}>
      {children}
    </RouteContext.Provider>
  );
};
