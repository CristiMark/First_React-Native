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
        <Button
        onPress={()=> navigation.navigate("Counter")}
        title="Go to Counter Demo"/>
        <Button
        onPress={()=> navigation.navigate("Color")}
        title="Go to Color Demo"/>
        <Button
        onPress={()=> navigation.navigate("Square")}
        title="Go to Square Demo"/>
        <Button
        onPress={()=> navigation.navigate("TextInput")}
        title="Go to Text Input Screen Demo"/>
        <Button
        onPress={()=> navigation.navigate("Box")}
        title="Go to Text Box Demo"/>
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
