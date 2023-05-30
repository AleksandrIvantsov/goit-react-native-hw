import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import logOut from "../assets/logOut.png";
import mapPin from "../assets/mapPin.png";
import messageCircle from "../assets/messageCircle.png";
import grid from "../assets/grid.png";
import user from "../assets/user.png";
import userPhoto from "../assets/userPhoto.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <Pressable style={styles.logOutIcon}>
          <Image source={logOut} />
        </Pressable>
      </View>
      <ScrollView style={styles.publications}>
        <View style={styles.userInfo}>
          <Image source={userPhoto} style={styles.userPhoto} />
          <View>
            <Text style={styles.userNameText}>Natali Romanova</Text>
            <Text style={styles.userEmailText}>email@example.com</Text>
          </View>
        </View>

        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo1} style={styles.publicationItemPhoto} />
          </View>
          <Text style={styles.publicationItemTitle}>Ліс</Text>
          <View style={styles.publicationItemInfo}>
            <View style={styles.publicationItemReactions}>
              <Image source={messageCircle} />
              <Text style={styles.publicationItemReactionsText}>0</Text>
            </View>
            <View style={styles.publicationItemLocation}>
              <Image source={mapPin} />
              <Text style={styles.publicationItemLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo2} style={styles.publicationItemPhoto} />
          </View>
          <Text style={styles.publicationItemTitle}>Захід на Чорному морі</Text>
          <View style={styles.publicationItemInfo}>
            <View style={styles.publicationItemReactions}>
              <Image source={messageCircle} />
              <Text style={styles.publicationItemReactionsText}>0</Text>
            </View>
            <View style={styles.publicationItemLocation}>
              <Image source={mapPin} />
              <Text style={styles.publicationItemLocationText}>Ukraine</Text>
            </View>
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
            <View style={styles.publicationItemReactions}>
              <Image source={messageCircle} />
              <Text style={styles.publicationItemReactionsText}>0</Text>
            </View>
            <View style={styles.publicationItemLocation}>
              <Image source={mapPin} />
              <Text style={styles.publicationItemLocationText}>Italy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <Pressable>
          <Image source={grid} />
        </Pressable>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Pressable>
          <Image source={user} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 11,
    paddingBottom: 11,
    marginTop: Platform.OS === "android" ? 40 : 0,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
  },
  headerText: {
    fontFamily: "Roboto500",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  logOutIcon: {
    position: "absolute",
    right: 16,
    width: 24,
    height: 24,
  },
  publications: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 8,
  },
  userNameText: {
    fontFamily: "Roboto700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmailText: {
    fontFamily: "Roboto400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
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
    color: "#BDBDBD",
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
  bottomMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 83,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#b3b3b3",
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

export default PostsScreen;
