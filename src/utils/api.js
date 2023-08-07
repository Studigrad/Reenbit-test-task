import axios from 'axios';

const findWeather = async (city) => {
  const res = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=HBT5GCZY4PVDF57LQD8YJUJYA&contentType=json`
  );
  return res.data;
};

export { findWeather };