import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  SafeAreaView,
  Text,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import arrowLeft from "../assets/arrowLeft.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const MapScreen = () => {
  const navigation = useNavigation();
  const {
    params: { photoLocation, photoTitle, markerCoords },
  } = useRoute();

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!userLocation && <Text>Мапа завантажується...</Text>}
      {userLocation && (
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
        >
          <Marker
            title={photoTitle}
            coordinate={markerCoords}
            description={photoLocation}
          />
        </MapView>
      )}

      <SafeAreaView style={styles.goBackBtnContainer}>
        <Pressable style={styles.goBackBtn} onPress={() => navigation.goBack()}>
          <Image source={arrowLeft} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  goBackBtnContainer: {
    position: "absolute",
    top: 75,
    left: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  goBackBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default MapScreen;
