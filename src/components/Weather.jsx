import React from 'react';
import weatherImg from '../images/weather-hd.png'
import TodaysForecast from './TodaysForecast';
import TenDay from './TenDay';

const Weather = () => {
    return (
        <div>
            <div className="d-flex align-items-center flex-column">
                <h1 className="mt-5">Weather Suite</h1>
                <img className="mb-3" id="img-size" src={weatherImg} alt="weather" />
            </div>
            <TodaysForecast />
            <TenDay />
        </div>
    )
};

export default Weather;