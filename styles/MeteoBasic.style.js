import { StyleSheet } from "react-native";

export const MeteoBase = StyleSheet.create({
  clock:{
    alignItems:"flex-end",
  },
  info:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  img:{
    height:70,
    width:70,
  },
  temperatureBox:{
    paddingTop:30,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline",
  },

});
