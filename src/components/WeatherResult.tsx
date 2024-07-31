// src/components/WeatherResult.tsx
import React from 'react';


interface WeatherResultProps {
    weatherData: any;
}

const WeatherResult: React.FC<WeatherResultProps> = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }

    return (
        <div className="card">
            {/* <h2>Prévision Météorologique</h2> */}
            <p>Temperature: <span className="card-items">{weatherData.main.temp}°C</span></p>
            <p>Feels like: <span className="card-items">{weatherData.main.feels_like}°C</span></p>
            <p>Weather: <span className="card-items">{weatherData.weather[0].description}</span></p>
            <p>Wind: <span className="card-items">{weatherData.wind.speed}km/h</span></p>
            <p>Humidity: <span className="card-items">{weatherData.main.humidity}%</span></p>
            <p>Pressure: <span className="card-items">{weatherData.main.pressure}mbar</span></p>
        </div>
    );
};

export default WeatherResult;
