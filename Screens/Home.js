import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ProfileScreen from "./ProfileScreen";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/operations";
import { ArrowLeft, Grid, LogOut, User } from "../icons/SvgIcons";

function MyTabBar({ state, navigation }) {
  if (state.index === 1) {
    return;
  }
  return (
    <SafeAreaView style={styles.bottomMenu}>
      <Pressable onPress={() => navigation.navigate("Posts")}>
        <Grid />
      </Pressable>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <User />
      </Pressable>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
              onPress={() => dispatch(logout())}
            >
              <LogOut />
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
              <ArrowLeft />
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
