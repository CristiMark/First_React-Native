import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Introduce un nume:</Text>
      <Text style={styles.textStyle}> Introduce un nume:</Text>
      <Text style={styles.textStyle}> Introduce un nume:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
     viewStyle: {
          borderWidth: 2,
          borderColor: 'black',
          flexDirection: 'column',
          height: 200,
          justifyContent: 'space-around'
     },
     textStyle: {
          borderColor: 'red', 
          borderWidth: 1,
     }
});

export default BoxScreen;
