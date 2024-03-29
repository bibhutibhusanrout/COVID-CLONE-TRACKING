function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(respose => respose.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255,0,0)";
                }
                else{
                    color = `rgb(${cases},0,0)`;
                }

                // Mark on the map
                const marker = new mapboxgl.Marker({
                    // draggable: true
                    draggable: false,
                    // color: "red"
                    // color: "rgb(255,0,0)"
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })

}
let interval = 20000;
setInterval(updateMap(),interval);
