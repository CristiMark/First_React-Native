import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreenn = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, charge) => {
    switch (color) {
      case "red":
        red + charge > 255 || red + charge < 0 ? null : setRed(red + charge);
        return;
      case "green":
        green + charge > 255 || green + charge < 0 ? null : setGreen(green + charge);
        return;
      case "blue":
        blue + charge > 255 || blue + charge < 0 ? null : setBlue(blue + charge);
        return;
      default: 
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        title="Red"
        onIncrase={() => setColor("red", 10)}
        onDecrese={() => setColor("red", -1 * 10)}
      />
      <ColorCounter
        title="Blue"
        onIncrase={() => setColor('blue', 10)}
        onDecrese={() => setColor('blue',-1 * 10)}
      />
      <ColorCounter
        title="Green"
        onIncrase={() => setColor("green", 10)} 
        onDecrese={() => setColor("green" -1 * 10)}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({});

export default SquareScreenn;
