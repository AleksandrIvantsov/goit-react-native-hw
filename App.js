import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto500: require("./assets/fonts/Roboto500.ttf"),
    Roboto400: require("./assets/fonts/Roboto400.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
