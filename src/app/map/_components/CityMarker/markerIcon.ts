import marker from '/public/marker.svg'
import L from "leaflet";

const markerSize = {
  x: 30,
  y: 30,
};

export const markerIcon = L.icon({
  iconUrl: marker.src,
  iconSize: [markerSize.x, markerSize.y],
  iconAnchor: [markerSize.x/2, markerSize.y],
  popupAnchor: [0, -markerSize.y/2]
});