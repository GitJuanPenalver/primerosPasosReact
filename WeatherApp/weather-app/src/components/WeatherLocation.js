import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        {/* Establecemos city como parametro por defecto*/}
        <Location city = {"Murcia"}/>
        <WeatherData></WeatherData>
    
    </div>
    
);

export default WeatherLocation;