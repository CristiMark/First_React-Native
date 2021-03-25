import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextInputScreen = () => {
const [name, seName] = useState('');
  return (
    <View>
      <Text style={styles.textStyle}> Introduce un nume:</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect = {false}
      value = {name}
      onChangeText  = {(text) =>{seName(text)}}
      ></TextInput>
      <Text>Your Name is:{name}</Text>
      {name.length < 5 ? <Text>Trebuie sa contina mai putin de 5 caractere</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextInputScreen;
