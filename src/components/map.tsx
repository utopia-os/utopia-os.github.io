import React from 'react';
import { UtopiaMap, Layer, Tags } from 'utopia-ui'
import { tags, places, events } from './data'

export function Map(props): JSX.Element {
    return (
        <div id="map">
            <UtopiaMap
                height={props.height}
                width={props.width}
                center={props.center}
                zoom={props.zoom}
            >
                <Layer
                    name='places'
                    menuIcon='LocationMarkerIcon'
                    menuText='add new place'
                    menuColor='#2E7D32'
                    markerIcon='circle-solid'
                    markerShape='circle'
                    markerDefaultColor='#777'
                    data={places} />
                <Layer
                    name='events'
                    menuIcon='CalendarIcon'
                    menuText='add new event'
                    menuColor='#f9a825'
                    markerIcon='calendar-days-solid'
                    markerShape='square'
                    markerDefaultColor='#777'
                    data={events} />
                <Tags data={tags}></Tags>
            </UtopiaMap>

        </div>
    );
}

