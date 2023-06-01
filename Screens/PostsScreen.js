import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import mapPin from "../assets/mapPin.png";
import messageCircle from "../assets/messageCircle.png";
import userPhoto from "../assets/userPhoto.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});

export default PostsScreen;
