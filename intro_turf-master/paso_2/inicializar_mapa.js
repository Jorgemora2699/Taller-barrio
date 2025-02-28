var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.pm.addControls({
    position:'topleft',
    drawCircle: false
})

let drawnLayers =[];
let intersectionsLayers=[]

// Manejadores de eventos

map.on("pm:create", function (e){
    let myLayer = e.layer;
    //Si es un polígono entonces agregarlo al arreglo drawnLayers
    if(myLayer instanceof L.Polygon){
        //Agregar el objeto capa al arreglo
        drawnLayers.push(myLayer);
        console.info("Has creado un polígono")
    }
})


map.on("pm:remove", function (e) {
    drawnLayers = drawnLayers.filter((layer)=> layer != e.layer);
    console.log("Has borrado un polígono");
}
)

