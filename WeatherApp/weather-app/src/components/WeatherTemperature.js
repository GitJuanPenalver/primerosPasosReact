import React from "react";
// La libreria weathericons está obsoleta
// import WeatherIcons from 'react-weathericons';
import { FaSun, FaRainbow, FaReact } from 'react-icons/fa';
// import { FcAssistant } from "react-icons/fc";
const icons = {
    sunny: "FaSun",
    fog: "FaRainbow",
}


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <FaSun/>
    else
        return <FaRainbow/>
};



const WeatherTemperature = ({temperature, weatherState}) => (

    <div>

        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} ºC`}</span>
        <br/>
        <FaReact size="100px"/>


    </div>
);

export default WeatherTemperature;