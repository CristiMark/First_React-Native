import React,{useState} from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const CounterScreenn = () => {
     const [counter, setCounter] = useState(0)
  return(       
   <View>
        <Button title="Increse" onPress={()=>setCounter(counter + 1)}/>
        <Button title="Decrese" onPress={()=>setCounter(counter - 1)}/>
     <Text style={styles.text}>Current Count:{counter}</Text>   
     </View>
     );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default CounterScreenn;
