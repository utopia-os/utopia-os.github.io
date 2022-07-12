---
sidebar_position: 2
---

# Map

The Map Component based on [leaflet](https://leafletjs.com) is the crystalisation point of Utopia OS.

The map shows places, events and people at their respective position whith nice and informative Popups. Tags, colors and clusters help to retain the overview.

[Include](/docs/utopia-ui/getting-started) it somewhere in your React Application, pass some data and the required props.

### Map Component Options

 Option         | Type              | Default      | Description 
 ---            | ---               | ---          | ---    
 `height`       | `string`          |`'400px'`     | height of the map           
 `width`        | `string`          |`'100vw'`     | width of the map
 `center`       | `LatLng`          |`[50.6, 9.5]` | initial map position           
 `zoom`         | `number`          |`10`          | initial zoom level
 `places`       | [`Item[]`](https://utopia-os.org/docs/utopia-ui/map-components/item)| `[]`  | Array with Items           
 `events`       | [`Item[]`](https://utopia-os.org/docs/utopia-ui/map-components/item)| `[]`  | Array with Items             
 `tags`       | [`Tag[]`](https://utopia-os.org/docs/utopia-ui/map-components/tag)    | `[]`  | Array with Tags        


### ToDos
[Kanban Board](https://github.com/utopia-os/utopia-ui/projects/1)