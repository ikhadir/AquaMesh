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
