import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import mapPin from "../assets/mapPin.png";
import messageCircle from "../assets/messageCircle.png";
import messageCircleOrange from "../assets/messageCircleOrange.png";
import userPhoto from "../assets/userPhoto.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getIsloading, getPosts, getUserInfo } from "../redux/selectors";
import { useEffect } from "react";
import { fetchPosts } from "../redux/operations";
import { ActivityIndicator } from "react-native";

const PostsScreen = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(getUserInfo);
  const posts = useSelector(getPosts);
  const isLoading = useSelector(getIsloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.publications}>
        <View style={styles.userInfo}>
          <Image source={userPhoto} style={styles.userPhoto} />
          <View>
            <Text style={styles.userNameText}>{userInfo.name}</Text>
            <Text style={styles.userEmailText}>{userInfo.email}</Text>
          </View>
        </View>

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

export default PostsScreen;
