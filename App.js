import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto700: require("./assets/fonts/Roboto700.ttf"),
    Roboto500: require("./assets/fonts/Roboto500.ttf"),
    Roboto400: require("./assets/fonts/Roboto400.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
    </>
  );
}
