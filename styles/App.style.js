import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import backgroundImg from "../assets/background.png";
import { nowToHHMM } from "../services/date-service";
export const AppStyle = StyleSheet.create({
  app: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#9370DB",
    padding: 20,
  },
  imgBack: {
    opacity: 0.8,
  },
});

export const BackImg = ({ children }) => {
  const [background, setBackground] = useState(backgroundImg);

  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM())
      if (
        (time >= "20:00" && time < "23:59") ||
        (time >= "00:00" && time < "06:00")
      ) {
        setBackground(require("../assets/backgroundNight.png"));
      } else if (
        (time >= "19:00" && time < "20:00") ||
        (time >= "06:00" && time < "08:00")
      ) {
        setBackground(require("../assets/backgroundSunrise.png"));
      } else {
        setBackground(backgroundImg);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ImageBackground
      source={background}
      style={AppStyle.background}
      imageStyle={AppStyle.imgBack}
    >
      {children}
    </ImageBackground>
  );
};
