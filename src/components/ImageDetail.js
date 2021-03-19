import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity, Image } from "react-native";

const ImageDetail = (props) => {
  return(       
   <View>
     <Text style={styles.text}>{props.title}</Text>
     <Image source={props.imageSource}/>
     <Text style={styles.score}>Score: {props.score}</Text>
     </View>
     );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttons: {
    paddingTop: "3",
  },
});

export default ImageDetail;
