import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { TxtStyle } from "../styles/Txt.style";

export const Txt = ({ children, style }) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || TxtStyle.txt.fontSize;

  return (
    <Text
      style={[
        TxtStyle.txt,
        style,
        { fontSize: fontSize * (1 / height) * height },
      ]}
    >
      {children}
    </Text>
  );
};
