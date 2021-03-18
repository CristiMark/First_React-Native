import React from 'react'
import {Text,StyleSheet,View, FlatList} from 'react-native'

const ListComponent = () =>{
    
     // const friends = [
     //      {name: 'Friend 1', key: '1'},
     //      {name: 'Friend 2', key: '2'},
     //      {name: 'Friend 3',key: '3'},
     //      {name: 'Friend 4',key: '4'},
     // ]
     const friends = [
          {name: 'Friend 1', age:20},
          {name: 'Friend 2', age:30},
          {name: 'Friend 3', age:40},
          {name: 'Friend 4', age:50},
     ]

     return ( 
     <FlatList 
     keyExtractor ={(friend)=>friend.name}
     data = {friends} 
     renderItem={({item})=>{
          return <Text>{item.name} has age of {item.age}</Text>

     }}/>
     )       
}

const styles = StyleSheet.create({
textStyle:{
     fontSize:30
},
subtextStyle:{
     fontSize:20
}
});

export default ListComponent;