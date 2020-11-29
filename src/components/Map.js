import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
    return (
        <div className="map">
            <h1>test here</h1>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDG5Q3wIguxWGPQg1D0lr4x8VBBzea1ytQ'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lon: -122.8756
    },
    zoom: 2
}

export default Map
