AWS.config.region = 'YOUR_AWS_REGION'; // e.g., 'us-west-2'
AWS.config.credentials = new AWS.Credentials('YOUR_AWS_ACCESS_KEY_ID', 'YOUR_AWS_SECRET_ACCESS_KEY');

const mapName = 'YOUR_MAP_NAME';

const amplifyConfig = {
    geo: {
        AmazonLocationService: {
            maps: {
                items: {
                    default: {
                        style: mapName,
                    }
                },
                default: 'default',
            }
        }
    }
};

const { Geo } = window.aws_amplify_core;

Geo.configure(amplifyConfig);

async function initializeMap() {
    const map = new Geo.Map({
        container: 'map',
        center: [0, 0],
        zoom: 2,
    });

    new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);

    map.on('load', () => {
        map.resize();
    });
}

initializeMap();
