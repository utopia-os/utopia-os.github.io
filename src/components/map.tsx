import React from 'react';
import {UtopiaMap} from 'utopia-ui'
import {tags, places, events} from './data'

export function Map(props): JSX.Element {
    return (
    <div id="map">
        <UtopiaMap height={props.height} width={props.width} center={props.center} zoom={props.zoom} places={places} events={events} tags={tags}/>
    </div>
    );
}

