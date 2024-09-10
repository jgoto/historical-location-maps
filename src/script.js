const map = L.map('map').setView([38.7293, -77.1074], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([38.7293, -77.1074]).addTo(map);
const circle = L.circle([38.7277, -77.1062],{
    color: "red",
    fillCOlor: "#f83",
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
circle.bindPopup("Mt Vernon VA");