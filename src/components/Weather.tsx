// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface WeatherData {
//     main?: {
//         temp: number;
//     };
//     weather?: {
//         description: string;
//     }[];
// }

// const Weather: React.FC = () => {
//     const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
//     const [city, setCity] = useState<string>('Paris');
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 const response = await axios.get(`http://127.0.0.1:8001/weather/?city=${city}`);
//                 console.log('API Response:', response.data.weather_data);
//                 setWeatherData(response.data.weather_data); 
//             } catch (err) {
//                 console.error('Error fetching weather data:', err);
//                 setError("Failed to fetch weather data.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchWeather();
//     }, [city]);

//     return (
//         <div>
//             <h1>Weather in {city}</h1>
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {weatherData && weatherData.main && weatherData.weather && (
//                 <div>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//             <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="Enter city"
//             />
//         </div>
//     );
// };

// export default Weather;
