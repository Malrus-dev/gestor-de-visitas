import Geolocation from '@react-native-community/geolocation';

export function capturarLocalizacao(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (pos) => resolve({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }),
      (erro) => reject(erro),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );
  });
}
