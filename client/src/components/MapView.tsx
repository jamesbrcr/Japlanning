import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView() {
  return (
    <MapContainer
      center={[35.6812, 139.7671]} // Tokyo Station coordinates
      zoom={10}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6812, 139.7671]}>
        <Popup>Tokyo Station</Popup>
      </Marker>
    </MapContainer>
  );
}
