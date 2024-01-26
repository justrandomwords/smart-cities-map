import { createRoot } from 'react-dom/client';
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './overwrite-map.css';
import { smartCities } from '@/data/smartCities'
import CityMarker from '../CityMarker/CityMarker';
import { useLayoutEffect } from 'react';
import MapControls from '../MapControls/MapControls';
import { useRouter } from 'next/navigation'

export default function Map() {
  const router = useRouter();

  const markers = Object.entries(smartCities).map(([key, markerData]) => 
    <CityMarker
      key={key}
      name={markerData.name}
      coordinates={[markerData.coordinates[0], markerData.coordinates[1]]}
      handleClick={() => router.push(`/map/${key}`, { scroll: false })}
    />) 

  useLayoutEffect(() => {
    const element = document.querySelector('.leaflet-control-container');
    if (element) {
      const root = createRoot(element);
      root.render(<MapControls />);
    }
  }, [])

  return (
    <MapContainer className='h-dvh w-screen' center={[30, 10]} zoom={2} worldCopyJump={true} minZoom={2}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
      {markers}
    </MapContainer>
  )
}
