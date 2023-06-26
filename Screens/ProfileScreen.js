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
import messageCircleOrange from "../assets/messageCircleOrange.png";
import userPhoto from "../assets/userPhoto.jpg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getIsloading, getPosts, getUserInfo } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../redux/operations";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const posts = useSelector(getPosts);
  const isLoading = useSelector(getIsloading);

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
      </View>
      <ScrollView style={styles.publications}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF6C00" />
        ) : (
          posts.map(
            ({
              id,
              photoTitle,
              photoLocation,
              userLocation,
              photoUrl,
              comments,
            }) => (
              <View key={id} style={styles.publicationItem}>
                <View style={styles.imageThumb}>
                  <Image
                    source={{ uri: photoUrl }}
                    style={styles.publicationItemPhoto}
                  />
                </View>
                <Text style={styles.publicationItemTitle}>{photoTitle}</Text>
                <View style={styles.publicationItemInfo}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Comments", {
                        postId: id,
                        photoUrl,
                      })
                    }
                  >
                    <View style={styles.publicationItemReactions}>
                      <Image
                        source={
                          comments.length ? messageCircleOrange : messageCircle
                        }
                      />
                      <Text style={styles.publicationItemReactionsText}>
                        {comments.length}
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Map", {
                        photoTitle,
                        photoLocation,
                        markerCoords: userLocation,
                      })
                    }
                  >
                    <View style={styles.publicationItemLocation}>
                      <Image source={mapPin} />
                      <Text style={styles.publicationItemLocationText}>
                        {photoLocation}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            )
          )
        )}
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
