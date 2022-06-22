import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export function Map(): JSX.Element {
    return (
    <div id="map">
    <MapContainer scrollWheelZoom={false} style={{ height: "400px",   width: "100vw" }}  center={[51.3, 9.6]} zoom={10}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    </div>
    );
}

