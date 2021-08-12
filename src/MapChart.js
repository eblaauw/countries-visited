import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = []
const countriesVisited = ["NLD", "DEU", "POL", "FR", "DNK", "IND", "KWT", "ARE", "TUR", "ROU", "HUN", "SWE", "NOR", "USA", "GBR", "ESP", "FRA", "CHE", "AUT", "ITA", "BEL", "SAU", "LUX", "EGY"]
const MapChart = () => {
    return (
        <ComposableMap>
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            // console.log(geo);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={countriesVisited.includes(geo.properties.ISO_A3) ? '#FF5A00' : '#AEAEAE'}
                                />
                            );
                        })
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;
