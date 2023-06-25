import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import logOut from "../assets/logOut.png";
import bgImage from "../assets/bg.png";
import removeBtn from "../assets/remove.png";
import mapPin from "../assets/mapPin.png";
import messageCircle from "../assets/messageCircle.png";
import userPhoto from "../assets/userPhoto.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getState, getUserInfo } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { fetchPosts, logout } from "../redux/operations";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const state = useSelector(getState);

  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
        <View style={styles.avatarConainer}>
          <Image style={styles.avatar} source={userPhoto} />
          <Image style={styles.addBtn} source={removeBtn} />
        </View>
        <Pressable style={styles.logOutIcon} onPress={() => dispatch(logout())}>
          <Image source={logOut} />
        </Pressable>
        <Text style={styles.heading}>{userInfo.name}</Text>
        <Pressable onPress={() => console.log("state", state)}>
          <View style={styles.publicationItemLocation}>
            <Image source={mapPin} />
            <Text style={styles.publicationItemLocationText}>Show State</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => dispatch(fetchPosts())}>
          <View style={styles.publicationItemLocation}>
            <Image source={mapPin} />
            <Text style={styles.publicationItemLocationText}>Fetch Posts</Text>
          </View>
        </Pressable>
      </View>
      <ScrollView style={styles.publications}>
        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo1} style={styles.publicationItemPhoto} />
          </View>
          <Text style={styles.publicationItemTitle}>Ліс</Text>
          <View style={styles.publicationItemInfo}>
            <Pressable
              onPress={() =>
                navigation.navigate("Comments", {
                  postId: 1,
                })
              }
            >
              <View style={styles.publicationItemReactions}>
                <Image source={messageCircle} />
                <Text style={styles.publicationItemReactionsText}>0</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate("Map", {
                  latitude: 37.78825,
                  longitude: -122.4324,
                })
              }
            >
              <View style={styles.publicationItemLocation}>
                <Image source={mapPin} />
                <Text style={styles.publicationItemLocationText}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo2} style={styles.publicationItemPhoto} />
          </View>
          <Text style={styles.publicationItemTitle}>Захід на Чорному морі</Text>
          <View style={styles.publicationItemInfo}>
            <Pressable
              onPress={() =>
                navigation.navigate("Comments", {
                  postId: 2,
                })
              }
            >
              <View style={styles.publicationItemReactions}>
                <Image source={messageCircle} />
                <Text style={styles.publicationItemReactionsText}>0</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate("Map", {
                  latitude: 37.78825,
                  longitude: -122.4324,
                })
              }
            >
              <View style={styles.publicationItemLocation}>
                <Image source={mapPin} />
                <Text style={styles.publicationItemLocationText}>Ukraine</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo3} style={styles.publicationItemPhoto} />
          </View>
          <Text style={styles.publicationItemTitle}>
            Старий будиночок у Венеції
          </Text>
          <View style={styles.publicationItemInfo}>
            <Pressable
              onPress={() =>
                navigation.navigate("Comments", {
                  postId: 3,
                })
              }
            >
              <View style={styles.publicationItemReactions}>
                <Image source={messageCircle} />
                <Text style={styles.publicationItemReactionsText}>0</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate("Map", {
                  latitude: 37.78825,
                  longitude: -122.4324,
                })
              }
            >
              <View style={styles.publicationItemLocation}>
                <Image source={mapPin} />
                <Text style={styles.publicationItemLocationText}>Italy</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 160,
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
  avatarConainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  logOutIcon: {
    position: "absolute",
    top: 22,
    right: 16,
    width: 24,
    height: 24,
  },
  heading: {
    marginBottom: 32,
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  publications: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  publicationItem: {
    marginBottom: 32,
  },
  imageThumb: {
    height: 240,
    width: "100%",
    marginBottom: 8,
  },
  publicationItemPhoto: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 8,
  },
  publicationItemTitle: {
    fontFamily: "Roboto500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  publicationItemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  publicationItemReactions: {
    flexDirection: "row",
    alignItems: "center",
  },
  publicationItemLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  publicationItemReactionsText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginLeft: 6,
  },
  publicationItemLocationText: {
    fontFamily: "Roboto500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 6,
  },
});

export default ProfileScreen;
