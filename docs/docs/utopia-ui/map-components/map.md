---
sidebar_position: 2
---

# Map

The Map Component based on [leaflet](https://leafletjs.com) is the crystalisation point of Utopia OS.

The map shows places, events and people at their respective position whith nice and informative Popups. Tags, colors and clusters help to retain the overview.

[Include](/docs/utopia-ui/getting-started) it somewhere in your React Application, pass some data and the required props.

### Options


 Option         | Type              | Default      | Required   | Description 
 ---            | ---               | ---          | ---        | ---    
 `height`       | `string`          |`'400px'`     |    No      | height of the map           
 `width`        | `string`          |`'100vw'`     |    No      | width of the map
 `center`       | `LatLng`          |`[50.6, 9.5]` |    No      | initial map position           
 `zoom`         | `number`          |`10`          |    No      | initial zoom level
 `places`       | [`Item[]`](https://utopia-os.org/docs/utopia-ui/map-components/item)|         |  No         | Array with Items           
 `events`       | [`Item[]`](https://utopia-os.org/docs/utopia-ui/map-components/item)|         |  No         | Array with Items             
 `tags`       | [`Tag[]`](https://utopia-os.org/docs/utopia-ui/map-components/tag)    |         |  No         | Array with Tags        


### ToDos
[Kanban Board](https://github.com/utopia-os/utopia-ui/projects/1)