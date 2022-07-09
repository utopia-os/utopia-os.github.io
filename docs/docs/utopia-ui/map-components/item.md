---
sidebar_position: 4
---

# Items

with Marker customizable in shape, color and icon

### Item Object


 Option         | Type              | Default      | Required   | Description 
 ---            | ---               | ---          | ---        | ---    
 `id`       | `string`          | -            |   **Yes**         | unique identifier    
 `name`       | `string`          | -            |    **Yes**          | name of the item           
 `text`        | `string`          | -            |   **Yes**           | description
 `position`       | `LatLngExpression`| -            |   **Yes**           | initial map position           
 `tags`         | [`Tag[]`](/docs/utopia-ui/map-components/tag)         | -            |     No       | initial zoom level
`date_created`  | `YYYY-MM-DDTHH:MM:SSZ`          | -            |     No       | timestamp   
`date_updated`  | `YYYY-MM-DDTHH:MM:SSZ`          | -            |     No       | timestamp   