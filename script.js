const apiKey = "v1.public.eyJqdGkiOiJmYWEwNDg2Zi04NjczLTRiYmQtYTkyYy1jM2JjYzlkYmJkYzgifZTA0F_jly74TvIFsjWsHgVV2CbjTZkn49uUun9edkRF_tbwXYPSVypRgHaL2WYq2VHrntsezmnUKxLplBpXA55-xJNXI1BNX-sYP1J-rFL5_ou8vcHW1_xfwSZ79UgkqN0LmP-cIL_vNf6DiW6p5VYzs8ved4Dw6mfRAiSnaGTnLl6nv_ER0CDTfCm-qXl8LZ-APgBbpJ3UkmXTZ9mrpeRFwId6SfpheQZNvaOo38FQyJp-bChbNql1UZA_-hMg_NucrRKkHkmORBL6NC4X6Si3Bz2Ng7rjLGoUeDMg0bCRIDcrlu2un_KjDRY8F5roi5z_qQafpcIiisVBTOhozW8.NjAyMWJkZWUtMGMyOS00NmRkLThjZTMtODEyOTkzZTUyMTBi";
const mapName = "Tester_map";
const region = "us-east-2";

const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
    center: [-123.115898, 49.295868],
    zoom: 11,
});
map.addControl(new maplibregl.NavigationControl(), "top-left");

const mockSensorData = [
    {
        name: "Sensor 1",
        latitude: 49.2827,
        longitude: -123.1207,
        temperature: 22.5,
        humidity: 60
    },
    {
        name: "Sensor 2",
        latitude: 49.2627,
        longitude: -123.1307,
        temperature: 21.0,
        humidity: 65
    },
    {
        name: "Sensor 3",
        latitude: 49.2727,
        longitude: -123.1407,
        temperature: 20.5,
        humidity: 70
    }
];

async function fetchSensorData() {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockSensorData);
        }, 1000); // Simulate network delay
    });
}

async function addPOIsToMap() {
    const sensorData = await fetchSensorData();

    sensorData.forEach(poi => {
        const marker = new maplibregl.Marker()
            .setLngLat([poi.longitude, poi.latitude])
            .setPopup(new maplibregl.Popup().setHTML(`
                <h3>${poi.name}</h3>
                <p>Temperature: ${poi.temperature}°C</p>
                <p>Humidity: ${poi.humidity}%</p>
            `))
            .addTo(map);
    });
}

// Initial load of sensor data
addPOIsToMap();

async function refreshSensorData() {
    // Clear existing markers
    document.querySelectorAll('.maplibregl-marker').forEach(marker => marker.remove());

    // Fetch and add new sensor data
    await addPOIsToMap();
}

// Refresh data every 5 minutes
setInterval(refreshSensorData, 300000);
