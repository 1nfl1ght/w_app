import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

type Props = {
  lon: number,
  lat: number,
}

export function MapPlacement( { lon, lat }: Props ) {
  const defaultState = {
    center: [lat, lon],
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width={'1160px'} height={'631px'}>
        <Placemark geometry={[lat, lon]} />
      </Map>
    </YMaps>
  );
}