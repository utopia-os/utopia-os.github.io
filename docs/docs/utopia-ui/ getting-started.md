---
sidebar_position: 1
---

# Getting Started

install via npm
```bash
 npm install utopia-ui
```

then import in your React App
```jsx
import UtopiaMap from 'utopia-ui'
```

use the [Map UI Component](/docs/utopia-ui/map-components/map)
```jsx
<UtopiaMap>
   height='360px'
   width='100vw'
   center={[51.3, 9.6]}
   zoom={6}
   places={places}
   events={events}
   tags = {tags}
</UtopiaMap>
```
You can find some Sample Data (places, events, tags) for test purpose below



### Sample Data
```jsx
const places = [{
  "id": 51,
  "name": "Stadtgemüse",
  "text": "Stadtgemüse Fulda ist eine Gemüsegärtnerei in Maberzell, die es sich zur Aufgabe gemacht hat, die Stadt und seine Bewohner:innen mit regionalem, frischem und natürlich angebautem Gemüse mittels Gemüsekisten zu versorgen. Es gibt also jede Woche, von Frühjahr bis Herbst, angepasst an die Saison eine Kiste mit schmackhaftem und frischem Gemüse für euch, welche ihr direkt vor Ort abholen könnt. \r\n\r\nhttps://stadtgemuese-fulda.de",
  "position": { "type": "Point", "coordinates": [9.632435, 50.560342] },
  "tags": [9,13],
},
{
  "id": 166,
  "name": "Weidendom",
  "text": "free camping",
  "position": { "type": "Point", "coordinates": [9.438793, 50.560112] },
  "tags": [10,11]
}];

const events = [
  {
    "id": 423,
    "name": "Hackathon",
    "text": "still in progress",
    "position": { "type": "Point", "coordinates": [9.5, 50.62] },
    "start": "2022-03-25T12:00:00",
    "end": "2022-05-12T12:00:00",
    "tags": [10]
  }
]

const tags = [
  {"id": 9, "name": "Gardening", "color": "#008e5b" },
  {"id": 10, "name": "Art", "color": "#fdc60b" },
  {"id": 11, "name": "Nature", "color": "#8cbb26"  },
  {"id": 13, "name": "Market", "color": "#2a71b0" }
]

```