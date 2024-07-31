import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Loader from './components/Loader'; 
import { getWeather } from './services/weather';
import './App.css';

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmit = async (data: { city: string }) => {
        setLoading(true);
        setError(null);
        
        setWeatherData(null);
        
        try {
            const weather = await getWeather(data.city);
            setWeatherData(weather);
        } catch (error) {
            console.log(error);
            setWeatherData(null);
            setError('Failed to fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Météo</h1>
            <div className="container">
                <div className="grid-container">
                    <div className="grid-item1">
                        <WeatherForm onSubmit={handleFormSubmit} />
                    </div>
                    <div className="grid-item">
                        {loading && <Loader />} 
                        {error && <p>{error}</p>}
                        {weatherData && <WeatherResult weatherData={weatherData} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
