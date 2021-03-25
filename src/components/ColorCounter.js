import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorCounter = ({ title, onIncrase, onDecrese }) => {
  return (
    <View>
      <Text>{title}:</Text>
      <Button title={`Add More ${title}`} onPress={() => onIncrase()} />
      <Button title={`Add Less ${title}`} onPress={() => onDecrese()} />
    </View>
  );
};


const styles = StyleSheet.create({});

export default ColorCounter;
