/**
 * Service for weather
 */

const baseUrl = `https://api.openweathermap.org/data/2.5/`;
const apiKey = `appid=${process.env.REACT_APP_API_KEY}`;

const WeatherService = {
  getWeather: (city: String, country: String) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(
        `${baseUrl}weather?q=${city},${country}&${apiKey}`
      ).then((res) => res.json());

      if (response.cod === 200) {
        resolve(response);
      } else {
        reject(response.message ?? "Something went wrong. Please try again");
      }
    });
  },
};

export default WeatherService;
