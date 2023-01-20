import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  PermissionsAndroid,
  Dimensions,
} from "react-native";

/* 
  SP:  -23.5492243  -46.5813785
  DF:  -15.8080374  -47.8750231
  CG:  -20.4695225  -54.6016767
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
*/

const App = () => {
  const [region, setRegion] = React.useState([]);
  const [markers, setMarkers] = React.useState([]);

  React.useEffect(() => {
    getMyLocation()    
  }, []);

  function getMyLocation() {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info.coords.latitude);
        console.log(info.coords.longitude);

        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      () => {
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
      }
    );
  }

  function newMarker(e) {
    console.log(e);
    let dados = {
      key: markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
      pinColor: "#FF0000",
    };

    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    setMarkers((oldArray) => [...oldArray, dados]);
  }

  React.useCallback( async () => {
     const PermissionsAndroid =  await PermissionsAndroid.request(
      "android.permission.ACCESS_FINE_LOCATION"
    );
    Geolocation.getCurrentPosition(
      (position) => {
        setRegion([position.coords])
      },
      (error) => {
        console.log(error.code, error.message);
      }
    )
  }, [])  

          /* latitude: -23.5492243,
          longitude: -46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
 */
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}></View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: -23.5492243,
          longitude: -46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        minZoomLevel={10}
        showsUserLocation={true}
        loadingEnabled={true}
        onPress={(e) => newMarker(e)}
      >
        {markers.length > 1 &&
          markers.map((marker, index) => {
          console.log(marker);
            return (
              <Marker
                key={marker.key}
                coordinate={marker.coords}
                pinColor={marker.pinColor}
              />
              );
            })
          }

          {markers.map((poly, index) => {
            console.log('poly', poly);
            return (
              <Polyline 
                key={poly.key}
                coordinates={[poly.coords]}
                strokeWidth={5}
                strokeColor="#000"
              />
            )
            })
          }
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
