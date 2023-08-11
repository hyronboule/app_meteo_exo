import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { HomeStyle } from "../styles/Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoApi } from "../api/meteoApi";
import { MeteoBasic } from "../components/MeteoBasic";
import { getWeatherInterpretation } from "../services/meteo-service";
import { MeteoAdvanced } from "../components/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const currentWeather = weather?.current_weather;
  const [city, setCity] = useState();
  const nav = useNavigation();

  useEffect(() => {
    getUserlocation();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  async function getUserlocation() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();

      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoApi.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }
  async function fetchCity(coordinates) {
    const cityResponse = await MeteoApi.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  }
  async function fetchCityByCoords(city) {
    try {
      const coords = await MeteoApi.fetchCityByCoords(city);
      setCoords(coords);
    } catch (error) {
      Alert.alert("Oups",error)
    }
  }

  function goToForcastPage() {
    nav.navigate("Forecast", { city, ...weather.daily });
  }
  return currentWeather ? (
    <View style={HomeStyle.home}>
      <View style={HomeStyle.head}>
        <MeteoBasic
          onPress={goToForcastPage}
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
      <View style={HomeStyle.searchBar}>
        <SearchBar onSubmit={fetchCityByCoords} />
      </View>
      <View style={HomeStyle.meteoAdvenced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed + " km/h"}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          down={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </View>
  ) : null;
};
