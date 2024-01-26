import './overwrite-marker.css'
import { Marker, Popup } from "react-leaflet";
import { markerIcon } from  './markerIcon'

type CityMarkerProps = {
  key: string,
  name: string,
  coordinates: [number, number],
  handleClick: (key: string) => void,
}

export default function CityMarker({ 
  key, 
  name, 
  coordinates, 
  handleClick 
}: CityMarkerProps) {

  
  return (
    <Marker 
      position={coordinates} 
      icon={markerIcon} 
      eventHandlers={{ 
        click: () => handleClick(key),
        mouseover: (event) => event.target.openPopup(),
        mouseout: (event) => event.target.closePopup(),
      }}
    >
      <Popup>{name}</Popup>
    </Marker>
  )
} 