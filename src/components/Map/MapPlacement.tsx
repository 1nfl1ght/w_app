import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function MapPlacement() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width={'1160px'} height={'631px'}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}