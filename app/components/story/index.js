import React, { Component,useState} from 'react';
import {StyleSheet,View,Image,Pressable, Button,Text,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import * as Progress from 'react-native-progress';
import { color, spring } from 'react-native-reanimated';
import { useEffect} from 'react';   
export function story({ route,navigation }) {
    let[timer]  =useState(null);
    let {ur,story} = route.params;

  setTimeout(() => {
    navigation.navigate('Last',{urip:ur})
       }, 5000); 
 

 
       
 

  return (  

    <View style={{ flex: 1, backgroundColor:'#E0EEEE' }}>
    <Progress.Bar style={styles.bar} progress={1} width={200}color={'#0066ff'} indeterminate={true} indeterminateAnimationDuration={5000}/>
        <Image style={styles.img}
          source={{ uri: story}}
        ></Image>
     </View>
     );

}
const styles = StyleSheet.create({
  img:{
 
    width: 300,
    height: 300,
    marginTop:100,
    marginLeft:60,
    borderWidth:5,
    borderColor : '#ffffff'
  },
  bar :{
marginTop :40,
marginLeft : 30,
marginRight:30,
borderRadius : 10,
width :350,
height :10,
borderWidth :2,
borderColor:'#232377'

},
});