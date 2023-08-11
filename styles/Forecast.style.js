import { StyleSheet } from "react-native";

export const ForecastStyle = StyleSheet.create({
  header: {
    paddingTop: 20,
    flexDirection: "row",
    gap: 20,
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    flex: 1,
  },
  info: {
    flex: 7,
    backgroundColor: "#25085a89",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    padding: 20,
    justifyContent:"space-around"
  },
  infoDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  img:{
    width:30,
    height:30,
  }
});
