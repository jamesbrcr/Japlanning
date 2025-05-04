import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet's default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type MapViewProps = {
  stops: string[];
};

const stationCoords: Record<string, [number, number]> = {
  Tokyo: [35.6812, 139.7671],
  Kyoto: [35.0116, 135.7680],
  Osaka: [34.6937, 135.5023],
  Shinjuku: [35.6909, 139.7003],
  Sapporo: [43.0687, 141.3508],
};

export default function MapView({ stops }: MapViewProps) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[35.6812, 139.7671]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stops.map((stop, i) => {
          const coords = stationCoords[stop];
          if (!coords) return null;
          return (
            <Marker key={i} position={coords}>
              <Popup>{stop}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
