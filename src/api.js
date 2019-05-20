import axios from 'axios';

export const getWeatherByCity = city => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=47e7b4c3cc442b9e91f743b03f5c3d51`)
export const getWeatherByZip = zip => axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=47e7b4c3cc442b9e91f743b03f5c3d51`)
export const getFiveDayByCity = city => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=47e7b4c3cc442b9e91f743b03f5c3d51`)
export const getFiveDayByZip = zip => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${zip},us&appid=47e7b4c3cc442b9e91f743b03f5c3d51`)