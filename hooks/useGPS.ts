import { useEffect, useState } from 'react';

export const useGPS = () => {
  const [coordenadas, setCoordenadas] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toString().replace('.', ',');
        const long = pos.coords.longitude.toString().replace('.', ',');
        setCoordenadas(`${lat}, ${long}`);
      },
      (err) => {
        setErro('Erro ao acessar localização');
        setCoordenadas(null);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  useEffect(() => {
    obterLocalizacao();
  }, []);

  return { coordenadas, erro, atualizar: obterLocalizacao };
};
