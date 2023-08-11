import axios from "axios";

export class MeteoApi {
  static async fetchWeatherFromCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }
  static async fetchCityFromCoords(coords) {
    const {
      address: { city, municipality },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return municipality || city;
  }
  static async fetchCityByCoords(city) {
    try {
      const { longitude: lng, latitude: lat } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
        )
      ).data.results[0];

      return { lat, lng };
    } catch (error) {
      throw "Pas de coodonées trouvées pour: " + city;
    }
  }
}
