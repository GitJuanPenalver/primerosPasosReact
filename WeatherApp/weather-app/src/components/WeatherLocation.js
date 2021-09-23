import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import Fecha from './Fecha'

const WeatherLocation = () => (

    <div>
        {/* Establecemos city como parametro por defecto*/}
        <Location city={"Murcia"} />
        <WeatherData></WeatherData>
        <Fecha></Fecha>

    </div>

);

export default WeatherLocation;