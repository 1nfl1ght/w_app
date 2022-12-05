import axios from "axios";
import { appendFile } from "fs";

const api = axios.create( {
    baseURL: "https://api.openweathermap.org/data/2.5",
} );

api.interceptors.request.use(config => {
    config.url = config.url + '&units=metric' + '&appid=e8b9f7c07e2c0e4d464cdaa4869c2ab6';
    return config;
});

export default api;