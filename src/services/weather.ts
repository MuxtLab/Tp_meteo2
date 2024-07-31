// // src/services/weather.ts
// import axios from 'axios';

// const apiKey = '51218ff640ea34473bb8e48c9f8e1796';
// const baseUrl = 'http://api.openweathermap.org/data/2.5/';

// export const getWeather = async (city: string) => {
//     const completeUrl = `${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//         const response = await axios.get(completeUrl);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         throw error;
//     }
// };

import axiosInstance from './interceptor';

export const getWeather = async (city: string) => {
    try {
        const response = await axiosInstance.get('weather', {
            params: {
                q: city,
                units: 'metric'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

