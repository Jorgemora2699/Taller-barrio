
fetch('arboles.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 5,
          fillColor: "green",
          color: "darkgreen",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).bindPopup(`Árbol: ${feature.properties.nombre}`); // Ajusta según atributos
      }
    }).addTo(map);
  })
  .catch(error => console.error('Error cargando los árboles:', error));


function calculateAreas(){

    drawnLayers.forEach(
        function(layer){
            try{
                let area = turf.area(layer.toGeoJSON());
                let centroid= turf.centroid(layer.toGeoJSON());
                x= centroid.geometry.coordinates[1];
                y= centroid.geometry.coordinates[0];
                L.marker([x,y],{
                    icon: L.divIcon(
                        {
                            className: "area_label",
                            html: `${area} m2`
                        }
                    )
                }
                ).addTo(map);
                console.log(area);
            }catch(error){
                console.warn("Hubo un error al calcular el área.")
            }
        }
    )

}