import React from "react";
import {View, Image, TouchableOpacity } from "react-native";
import { MeteoBase } from "../styles/MeteoBasic.style";
import { Txt } from "./Txt";
import { Clock } from "./Clock";

export const MeteoBasic = ({ temperature, city, interpretation, onPress }) => {
  return (
    <>
      <View style={MeteoBase.clock}>
        <Clock />
      </View>
      <View style={MeteoBase.info}>
        <Txt>{city}</Txt>
        <Txt style={{ fontSize: 20 }}>{interpretation.label}</Txt>
      </View>

      <View style={MeteoBase.temperatureBox}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={{ fontSize: 130 }}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={MeteoBase.img} source={interpretation.image} />
      </View>
    </>
  );
};
