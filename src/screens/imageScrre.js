import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
  return (
    <ScrollView>
      <View>
        <ImageDetail
          title="Forest"
          imageSource={require("../../assets/forest.jpg")}
          score={5}
        />
        <ImageDetail
          title="Beach"
          imageSource={require("../../assets/beach.jpg")}
          score={3}
        />
        <ImageDetail
          title="Mountain"
          imageSource={require("../../assets/mountain.jpg")}
          score={7}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttons: {
    paddingTop: "3",
  },
});

export default ImageScreen;
