---
sidebar_position: 4
---

# Items Data

with Marker customizable in shape, color and icon

### Item Object


Key             | Type                    | Required   | Description 
---             | ---                     | ---        | ---    
`id`            | `number`                |   **Yes**  | unique identifier    
`name`          | `string`                |   **Yes**  | name of the item           
`text`          | `string`                |   **Yes**  | description
`position`      | `LatLngExpression`      |   **Yes**  | item position           
`tags`          | `numbers[]`             |     No     | ids of all belonging tags
`start`         | `YYYY-MM-DDTHH:MM:SSZ`  |     No     | timestamp   
`end`           | `YYYY-MM-DDTHH:MM:SSZ`  |     No     | timestamp   
`date_created`  | `YYYY-MM-DDTHH:MM:SSZ`  |     No     | timestamp   
`date_updated`  | `YYYY-MM-DDTHH:MM:SSZ`  |     No     | timestamp   

### Examples

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
```