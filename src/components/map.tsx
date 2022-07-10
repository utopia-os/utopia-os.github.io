import React from 'react';
import UtopiaMap from 'utopia-ui'
import 'leaflet/dist/leaflet.css';
import {tags, places} from './data'

function Layer(): JSX.Element {
    return (
        <>
        </>
    );
}

interface IMarkerPopupProps {
    item: IMapItem;
  }
  
interface IMapItem {
    id?: string,
    date_created?: string,
    date_updated?: string | null,
    name: string,
    text: string,
    position: IGeometry,
    start?: string,
    end?: string,
    tags?: ITag[],
    [key: string]:any
  }
  
 interface IGeometry {
    type: string;
    coordinates: number[];
  }
  
interface ITag {
    Tags_id :
    {
      color: string;
      id: string;
    }
  }


const events:IMapItem[] = [
    {
        "id": "1af74f62-9fcc-43c2-b63b-cc320dd4fcda",
        "date_created": "2022-05-09T21:35:09.250Z",
        "date_updated": null,
        "name": "bla bla",
        "text": "fsddfsf",
        "position": {
            "type": "Point",
            "coordinates": [
                10.1233030812617,
                50.7884682638985
            ]
        },
        "start": "2022-05-17T12:00:00",
        "end": "2022-05-25T12:00:00",
        "tags": [
            {
                "Tags_id": {
                    "color": "#75507B",
                    "id": "Docutopia"
                }
            },
            {
                "Tags_id": {
                    "color": "#3465A4",
                    "id": "Coding"
                }
            }
        ]
    },
    {
        "id": "65bbc003-b6de-4904-b85c-8ab6c92fe0db",
        "date_created": "2022-03-14T10:20:11.534Z",
        "date_updated": "2022-04-05T08:58:38.790Z",
        "name": "Hackathon",
        "text": "still in progress",
        "position": {
            "type": "Point",
            "coordinates": [
                9.97875748947354,
                51.1204618942726
            ]
        },
        "start": "2022-03-25T12:00:00",
        "end": "2022-05-12T12:00:00",
        "tags": [
            {
                "Tags_id": {
                    "color": "#75507B",
                    "id": "Docutopia"
                }
            },
            {
                "Tags_id": {
                    "color": "#3465A4",
                    "id": "Coding"
                }
            }
        ]
    }
];

export function Map(props): JSX.Element {
    return (
    <div id="map">
        <UtopiaMap height={props.height} width={props.width} center={props.center} zoom={props.zoom} places={places} events={events} tags={tags}/>
    </div>
    );
}

