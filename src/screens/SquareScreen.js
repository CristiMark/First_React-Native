import React, { useReducer } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer=(state,action) =>{
//state === {red:number, green:number, blue:number}
//action === {colorToChage:'red' || 'green' || 'blue', amount: 15 || -15}

     switch(action.colorToChange){
          case 'red':
              return state.red + action.amount > 255 || state.red + action.amount < 0
              ? state
              : {...state, red: state.red + action.amount} 
          case 'green':               
               return state.green + action.amount > 255 || state.green + action.amount < 0
               ? state
               : {...state, green: state.green + action.amount} 
          case 'blue':
               return state.blue + action.amount > 255 || state.blue + action.amount < 0
               ? state
               : {...state, blue: state.blue + action.amount} 
          default:
               return state
     }
};

const SquareScreen = () => {

  const [state,dispatch] =useReducer(reducer,{red:0, green:0, blue:0})
  const {red,green,blue} =state;
  return (
    <View>
      <ColorCounter
        title="Red"
        onIncrase={() => dispatch({colorToChage:'red', amount: 10})}
        onDecrese={() => dispatch({colorToChage:'red', amount:-1 * 10})}
      />
      <ColorCounter
        title="Blue"
        onIncrase={() => dispatch({colorToChage:'blue', amount:10})}
        onDecrese={() => dispatch({colorToChage:'blue', amount:-1 * 10})}
      />
      <ColorCounter
        title="Green"
        onIncrase={() => dispatch({colorToChage:'green', amount: 10})} 
        onDecrese={() => dispatch({colorToChage:'green', amount:-1 * 10})}
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

export default SquareScreen;
