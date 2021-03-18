import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View style ={styles.buttons}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={()=> navigation.navigate("Components")}
        title="Go to component demo"/>
        <Button
        onPress={()=> navigation.navigate("List")}
        title="Go to list Demo"/>
        <Button
        onPress={()=> navigation.navigate("Image")}
        title="Go to Image Demo"/>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("List")}>
          <Text>Go to list Demo</Text>
        </TouchableOpacity> */}
      </View>
     );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttons:{
    flex:1,
    justifyContent:"space-evenly"
  }
});

export default HomeScreen;
