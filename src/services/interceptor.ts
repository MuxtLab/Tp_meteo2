import axios from 'axios';

// creer une nouvelle instance d'axios avec sa configuration
const axiosInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// ajouter un intercepteur de requête pour inclure l'API dans chacune des requêtes
axiosInstance.interceptors.request.use(config => {
    config.params['appid'] = '51218ff640ea34473bb8e48c9f8e1796';
    return config;
}, error => {
    return Promise.reject(error);
});

// ajouter un intercepteur de reponse afin de traiter la reponse avant l'envoi a l'application
axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    console.error('Error in response:', error);
    return Promise.reject(error);
});

export default axiosInstance;
