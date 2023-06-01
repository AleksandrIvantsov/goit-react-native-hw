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
import photo2 from "../assets/photo2.jpg";
import userPhoto from "../assets/userPhoto.jpg";
import { useNavigation } from "@react-navigation/native";

const CommentsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Коментарі</Text>
        <Pressable style={styles.arrowLeftIcon}>
          <Image source={arrowLeft} />
        </Pressable>
      </View>
      <ScrollView style={styles.publications}>
        <View style={styles.publicationItem}>
          <View style={styles.imageThumb}>
            <Image source={photo2} style={styles.publicationItemPhoto} />
          </View>
        </View>

        <View
          style={
            false ? styles.commentContainerReversed : styles.commentContainer
          }
        >
          <View style={styles.avatarContainer}>
            <Image source={false ? userPhoto : ellipse} style={styles.avatar} />
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>

            <Text
              style={false ? styles.commentDateReversed : styles.commentDate}
            >
              09 червня, 2020 | 08:40
            </Text>
          </View>
        </View>

        <View
          style={
            true ? styles.commentContainerReversed : styles.commentContainer
          }
        >
          <View style={styles.avatarContainer}>
            <Image source={true ? userPhoto : ellipse} style={styles.avatar} />
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>

            <Text
              style={true ? styles.commentDateReversed : styles.commentDate}
            >
              09 червня, 2020 | 09:14
            </Text>
          </View>
        </View>

        <View
          style={
            false ? styles.commentContainerReversed : styles.commentContainer
          }
        >
          <View style={styles.avatarContainer}>
            <Image source={false ? userPhoto : ellipse} style={styles.avatar} />
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              Thank you! That was very helpful!
            </Text>

            <Text
              style={false ? styles.commentDateReversed : styles.commentDate}
            >
              09 червня, 2020 | 09:20
            </Text>
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        style={styles.bottomMenu}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          inputMode="text"
        />
        <TouchableOpacity style={styles.commentBtn}>
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
