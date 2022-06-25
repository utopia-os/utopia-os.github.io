import React from 'react';
import UtopiaMap from 'utopia-ui'
import 'leaflet/dist/leaflet.css';

export function Map(): JSX.Element {
    return (
    <div id="map">
        <UtopiaMap height='360px' width='100vw'></UtopiaMap>

    </div>
    );
}

