import React,{useReducer} from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const reducer=(state,action) =>{
  //state === {count:number}
  //action === {type:'increment' || 'decrement'}

       switch(action.type){
            case 'increment':
                return state.count > 254 
                ? state
                : {...state, count: state.count + 1 } 
            case 'decrement':               
                 return state.count < 1 
                 ? state
                 : {...state, count: state.count - 1 }            
            default:
                 return state
       }
  };

const CounterScreen = () => {
     const [state,dispatch] =useReducer(reducer,{count:0})
  return(       
   <View>
        <Button title="Increse" onPress={()=>dispatch({type:'increment'})}/>
        <Button title="Decrese"  onPress={()=>dispatch({type:'decrement'})}/>
     <Text style={styles.text}>Current Count:{state.count}</Text>   
     </View>
     );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },

});

export default CounterScreen;
