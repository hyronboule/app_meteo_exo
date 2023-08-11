import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Txt } from "../components/Txt";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ForecastStyle } from "../styles/Forecast.style";
import { ForcastLIstItem } from "../components/ForcastLIstItem";
import { getWeatherInterpretation } from "../services/meteo-service";

export const Forecast = () => {
  const { params } = useRoute();
  const nav = useNavigation();
  const day = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const backButton = (
    <TouchableOpacity
      onPress={() => {
        nav.goBack();
      }}
    >
      <Txt> {"<"}</Txt>
    </TouchableOpacity>
  );
  const forcastList = (
    <View style={ForecastStyle.info}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const img = getWeatherInterpretation(code).image;
        const temperature = Math.round(params.temperature_2m_max[index])
        const dayIndex = new Date(time).getDay()
        return (
          <ForcastLIstItem
            image={img}
            day={day[dayIndex]}
            date={params.time[index]}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
  const header = (
    <>
      <View style={ForecastStyle.header}>
        {backButton}
        <Txt>{params.city}</Txt>
      </View>
      <Txt style={ForecastStyle.text}>Prévision sur 7 jours</Txt>
      {forcastList}
    </>
  );
  return <>{header}</>;
};
