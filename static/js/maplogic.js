var map = L.map('map').setView([33.659541, -118.1552947], 9)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const updateMap = (coordinates) => {
    map.setView([coordinates[0], coordinates[2]], 9)
}

document.getElementById("search-form").addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = event.target.searchTerm.value
    fetch(("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + searchTerm), {
        method: "GET",
        headers: {
            'Content-Type':'application/json',
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        if(responseJson[0]) {
            const coordinates = responseJson[0].boundingbox
            updateMap(coordinates)
        } else {
            alert("No locations found.")
        }
    })
    .catch((error) => {
        console.error(error)
    })
});