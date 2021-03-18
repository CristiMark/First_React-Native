import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const ImageDetail = (props) => {
  return(
   
     <Text style={styles.text}>{props.title}</Text>
     
     );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttons:{
   paddingTop: '3'
  }
});

export default ImageDetail;
