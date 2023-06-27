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
  Image,
  TouchableOpacity,
} from "react-native";
import bgImage from "../assets/bg.png";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/operations";
import { getIsRefreshing, getRegisterError } from "../redux/selectors";
import { ActivityIndicator } from "react-native";
import { Add } from "../icons/SvgIcons";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const registerError = useSelector(getRegisterError);

  const [isInputLoginActive, setIsInputLoginActive] = useState(false);
  const [isInputEmailActive, setIsInputEmailActive] = useState(false);
  const [isInputPassActive, setIsInputPassActive] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    dispatch(
      register({
        userName: { displayName: login },
        email,
        password,
      })
    );

    setLogin("");
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
            <View style={styles.avatar}>
              <Add style={styles.addBtn} />
            </View>
            <Text style={styles.heading}>Реєстрація</Text>
            <TextInput
              style={isInputLoginActive ? styles.inputFocused : styles.input}
              onFocus={() => setIsInputLoginActive(true)}
              onBlur={() => setIsInputLoginActive(false)}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              inputMode="text"
            />
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
            {registerError && (
              <View style={styles.errorMessage}>
                <Text style={styles.errorMessageText}>
                  Помилка: {registerError}
                </Text>
              </View>
            )}
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            {isRefreshing ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color="#FF6C00"
              />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>
            )}

            <Pressable
              style={styles.auth}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.authText}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
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
    paddingBottom: 78,
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
  activityIndicator: {
    marginTop: 16,
    marginBottom: 16,
  },
  errorMessage: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#ff0000",
    borderRadius: 8,
  },
  errorMessageText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#ff0000",
  },
});

export default RegistrationScreen;
