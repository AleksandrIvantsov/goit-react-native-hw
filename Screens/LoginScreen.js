import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import bgImage from "../assets/bg.png";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/selectors";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config";
import { logIn, monitorAuthState } from "../redux/operations";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [isLoggedIn]);

  const [isInputEmailActive, setIsInputEmailActive] = useState(false);
  const [isInputPassActive, setIsInputPassActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    dispatch(
      logIn({
        email,
        password,
      })
    );

    setEmail("");
    setPassword("");
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.container}
        >
          <StatusBar style="auto" />
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={"padding"}
          >
            <Text style={styles.heading}>Увійти</Text>
            <TextInput
              style={isInputEmailActive ? styles.inputFocused : styles.input}
              onFocus={() => setIsInputEmailActive(true)}
              onBlur={() => setIsInputEmailActive(false)}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              inputMode="email"
            />
            <TextInput
              style={isInputPassActive ? styles.inputFocused : styles.input}
              onFocus={() => setIsInputPassActive(true)}
              onBlur={() => setIsInputPassActive(false)}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
            />
            <View style={styles.showBtnContainer}>
              <Pressable style={styles.showBtn} onPress={toggleSecureTextEntry}>
                <Text style={styles.showBtnText}>
                  {secureTextEntry ? "Показати" : "Приховати"}
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Pressable
              style={styles.auth}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.authText}>
                Немає акаунту? Зареєструватися
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  heading: {
    marginBottom: 32,
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  input: {
    width: "100%",
    padding: 16,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    width: "100%",
    padding: 16,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 27,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  authText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  showBtnContainer: {
    width: "100%",
  },
  showBtn: {
    position: "absolute",
    top: -53,
    right: 16,
  },
  showBtnText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default LoginScreen;
