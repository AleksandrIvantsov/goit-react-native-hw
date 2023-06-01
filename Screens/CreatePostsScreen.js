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
} from "react-native";
import mapPin from "../assets/mapPin.png";
import camera from "../assets/camera.png";
import trash from "../assets/trash.png";
import contentBlock from "../assets/contentBlock.jpg";

const CreatePostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.publications}>
        <View style={styles.publicationItem}>
          <Pressable>
            <View style={styles.imageThumb}>
              <Image
                source={contentBlock}
                style={styles.publicationItemPhoto}
              />
              <Image source={camera} style={styles.cameraIcon} />
            </View>
          </Pressable>
          <Text style={styles.publicationPhotoUploadText}>Завантажте фото</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              inputMode="text"
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              inputMode="text"
            />
            <Image source={mapPin} style={styles.locationIcon} />
          </View>
          <TouchableOpacity style={styles.publicationBtn} disabled>
            <Text style={styles.publicationBtnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Image source={trash} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  publicationItem: {
    marginBottom: 32,
  },
  imageThumb: {
    alignItems: "center",
    justifyContent: "center",
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
  cameraIcon: {
    position: "absolute",
    width: 60,
    height: 60,
  },
  publicationPhotoUploadText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 28,
    paddingRight: 28,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
  },
  locationIcon: {
    position: "absolute",
    bottom: 31,
  },
  bottomMenu: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "100%",
  },
  publicationBtn: {
    alignItems: "center",
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  publicationBtnText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
