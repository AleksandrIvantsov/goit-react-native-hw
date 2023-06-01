import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ProfileScreen from "./ProfileScreen";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import logOut from "../assets/logOut.png";
import arrowLeft from "../assets/arrowLeft.png";
import grid from "../assets/grid.png";
import user from "../assets/user.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

function MyTabBar({ state, navigation }) {
  if (state.index === 1) {
    return;
  }
  return (
    <SafeAreaView style={styles.bottomMenu}>
      <Pressable onPress={() => navigation.navigate("Posts")}>
        <Image source={grid} />
      </Pressable>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image source={user} />
      </Pressable>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
          },
          headerTitleStyle: {
            fontFamily: "Roboto500",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
          },
          headerRight: () => (
            <Pressable
              style={styles.logOutIcon}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={logOut} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
          },
          headerTitleStyle: {
            fontFamily: "Roboto500",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
          },
          headerLeft: () => (
            <Pressable
              style={styles.arrowLeftIcon}
              onPress={() => navigation.navigate("Posts")}
            >
              <Image source={arrowLeft} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logOutIcon: {
    position: "absolute",
    right: 16,
    width: 24,
    height: 24,
  },
  arrowLeftIcon: {
    position: "absolute",
    left: 16,
    width: 24,
    height: 24,
  },
  bottomMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#b3b3b3",
    backgroundColor: "#fff",
  },
  button: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto400",
    fontSize: 18,
    lineHeight: 19,
    color: "#fff",
  },
});

export default Home;
