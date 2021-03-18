import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

const ComponentScreen = () =>{
     const variabila = <Text style={styles.subtextStyle}> Acesta este un text</Text>
     return <View>
                <Text style={styles.textStyle}> Acesta este un text</Text>
                {variabila}
            </View>
}

const styles = StyleSheet.create({
textStyle:{
     fontSize:30
},
subtextStyle:{
     fontSize:20
}
});

export default ComponentScreen;