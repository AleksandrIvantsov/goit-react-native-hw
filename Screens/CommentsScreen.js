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
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import arrowLeft from "../assets/arrowLeft.png";
import ellipse from "../assets/ellipse.png";
import arrowTop from "../assets/arrowTop.png";
import userPhoto from "../assets/userPhoto.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../redux/operations";
import { getPosts } from "../redux/selectors";

const getPostComments = (posts, postId) => {
  const currentPost = posts.filter((post) => post.id === postId);

  return currentPost[0].comments;
};

const CommentsScreen = () => {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    params: { postId, photoUrl },
  } = useRoute();

  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    dispatch(
      updatePost({
        id: postId,
        text: commentText,
      })
    );

    setCommentText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Коментарі</Text>
        <Pressable
          style={styles.arrowLeftIcon}
          onPress={() => navigation.goBack()}
        >
          <Image source={arrowLeft} />
        </Pressable>
      </View>
      <ScrollView style={styles.publications}>
        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image
              source={{ uri: photoUrl }}
              style={styles.publicationItemPhoto}
            />
          </View>
        </View>
        {getPostComments(posts, postId).map((comment) => (
          <View
            key={comment.id}
            style={
              false ? styles.commentContainerReversed : styles.commentContainer
            }
          >
            <View style={styles.avatarContainer}>
              <Image
                source={false ? userPhoto : ellipse}
                style={styles.avatar}
              />
            </View>
            <View style={styles.comment}>
              <Text style={styles.commentText}>{comment.text}</Text>

              <Text
                style={false ? styles.commentDateReversed : styles.commentDate}
              >
                {comment.createdAt}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        style={styles.bottomMenu}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          inputMode="text"
          value={commentText}
          onChangeText={setCommentText}
        />
        <TouchableOpacity style={styles.commentBtn} onPress={handleSubmit}>
          <Image source={arrowTop} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  arrowLeftIcon: {
    position: "absolute",
    left: 16,
    width: 24,
    height: 24,
  },
  publications: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
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
  commentContainer: {
    flexDirection: "row",
    columnGap: 16,
    marginBottom: 24,
  },
  commentContainerReversed: {
    flexDirection: "row-reverse",
    columnGap: 16,
    marginBottom: 24,
  },
  comment: {
    width: "87%",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 6,
  },
  commentText: {
    fontFamily: "Roboto400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  commentDate: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    marginLeft: "auto",
  },
  commentDateReversed: {
    fontFamily: "Roboto400",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
  avatarContainer: {
    height: 28,
    width: 28,
  },
  avatar: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 14,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 14,
    fontFamily: "Roboto500",
    fontSize: 18,
    lineHeight: 22,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },
  commentBtn: {
    position: "absolute",
    top: 8,
    right: 24,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  bottomMenu: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default CommentsScreen;
