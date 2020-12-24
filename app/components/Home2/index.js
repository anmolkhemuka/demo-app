import React, { Component,useState} from 'react';
import {StyleSheet,View,Image,Pressable, Button,Text,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Home2({ route,navigation }) {

    let {urip,stori} = route.params;
  const [imageSource, setImageSource] = useState(null);
  
  return (
    <View style={{ flex: 1, backgroundColor:'#E0EEEE' }}>
      <Pressable onPress={()=>{navigation.navigate('Story',{ur:urip,story:stori})}}>
      <View style={styles.circle}>
      { urip==null  ? (
          <Image style={styles.image}  source={require('../../assets/my_img.jpeg')}></Image>
      ):
      (
        <Image
          source={{ uri: urip }}
          style={styles.image}
        />
      )}   
      </View>
      </Pressable>
     </View>
  );
}
const styles = StyleSheet.create({
    circle: {
      width: 200,
      height: 200,
      borderRadius: 100 / 1,
      backgroundColor: "blue",
      marginTop : 30,
      marginLeft:100,
      marginRight:100,
      borderWidth : 10,
      borderColor : '#66CDAA',
  
    },
    image:{
      position:'absolute',
      width: 180,
      height: 180,
      borderRadius: 100 / 1,
      backgroundColor: "red",
      zIndex:4,
     
    },
  });