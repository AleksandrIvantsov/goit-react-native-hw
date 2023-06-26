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
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { addPost } from "../redux/operations";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [takenPhoto, setTakenPhoto] = useState(null);

  const [photoTitle, setPhotoTitle] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleSubmit = () => {
    (async () => {
      setIsLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      const location = await Location.getCurrentPositionAsync();
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      dispatch(
        addPost({
          photoTitle,
          photoLocation,
          userLocation: coords,
          takenPhoto,
        })
      );

      setTakenPhoto(null);
      setPhotoTitle("");
      setPhotoLocation("");
      setIsLoading(false);

      navigation.navigate("Posts");
    })();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.publications}>
        <View style={styles.publicationItem}>
          {hasPermission ? (
            takenPhoto ? (
              <View style={styles.imageThumb}>
                <Image
                  source={{ uri: takenPhoto }}
                  style={styles.publicationItemPhoto}
                />
              </View>
            ) : (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.imageThumb}>
                  <TouchableOpacity
                    style={styles.cameraIconContainer}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        setTakenPhoto(uri);
                      }
                    }}
                  >
                    <Image source={camera} style={styles.cameraIcon} />
                  </TouchableOpacity>
                </View>
              </Camera>
            )
          ) : (
            <View style={styles.imageThumb}>
              <Image
                source={contentBlock}
                style={styles.publicationItemPhoto}
              />
              <Text style={styles.cameraDeniedAccessText}>
                Немає доступу до камери
              </Text>
            </View>
          )}
          {takenPhoto ? (
            <Pressable onPress={() => setTakenPhoto(null)}>
              <Text style={styles.publicationPhotoUploadText}>
                Переробити фото
              </Text>
            </Pressable>
          ) : (
            <Text style={styles.publicationPhotoUploadText}>
              Зробіть фото натиснувши на іконку фотоапарату
            </Text>
          )}

          <View>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              inputMode="text"
              value={photoTitle}
              onChangeText={setPhotoTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              inputMode="text"
              value={photoLocation}
              onChangeText={setPhotoLocation}
            />
            <Image source={mapPin} style={styles.locationIcon} />
          </View>
          {isLoading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
              color="#FF6C00"
            />
          ) : takenPhoto && photoTitle && photoLocation ? (
            <TouchableOpacity
              style={styles.publicationBtn}
              onPress={handleSubmit}
            >
              <Text style={styles.publicationBtnText}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.publicationBtnDisabled} disabled>
              <Text style={styles.publicationBtnTextDisabled}>
                Опублікувати
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          onPress={() => {
            setTakenPhoto(null);
            setPhotoTitle("");
            setPhotoLocation("");
          }}
        >
          <Image source={trash} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  camera: {
    borderRadius: 8,
  },
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
  cameraIconContainer: {
    position: "absolute",
  },
  cameraIcon: {
    width: 60,
    height: 60,
  },
  cameraDeniedAccessText: {
    position: "absolute",
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
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  publicationBtnDisabled: {
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
    color: "#fff",
  },
  publicationBtnTextDisabled: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  activityIndicator: {
    marginTop: 16,
  },
});

export default CreatePostsScreen;
