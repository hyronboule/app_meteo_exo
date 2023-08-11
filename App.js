import { StatusBar } from "expo-status-bar";
import { Home } from "./pages/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppStyle, BackImg } from "./styles/App.style";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import PTMono from "./assets/font/PTMono-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors:{background:"transparent"}
}
export default function App() {
  const [isFontLoaded] = useFonts({
    PTMono: PTMono,
  });

  return (
    <NavigationContainer theme={navTheme}>
      <BackImg
        source={backgroundImg}
        style={AppStyle.background}
        imageStyle={AppStyle.imgBack}
      >
        <SafeAreaProvider>
          <SafeAreaView style={AppStyle.app}>
            {isFontLoaded ? (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation:"flip" }}
                initialRouteName="Home"

              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forecast" component={Forecast} />
              </Stack.Navigator>
            ) : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </BackImg>
    </NavigationContainer>
  );
}
