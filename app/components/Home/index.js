import React, { Component,useState} from 'react';
import {StyleSheet,View,Image,Pressable, Button,Text,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function Home({ navigation }) {
  const [imageSource, setImageSource] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor:'#E0EEEE' }}>
      <Pressable onLongPress={()=>{
        const options = {
          title: 'Hola! choose your profile photo',
          noData: true,
          mediaType: 'photo',
        };
  
     ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');}
        else{
          let source = { uri: response.uri };
          setImageSource(source.uri);
        }
    });
    
 }}>
      <View style={styles.circle}>
      {imageSource === null ? (
          <Image style={styles.image} source={require('../../assets/my_img.jpeg')}></Image>
      ):
      (
        <Image
          source={{ uri: imageSource }}
          style={styles.image}
        />
      )}   
      </View>
      </Pressable>
      <View style={{position:'absolute',marginLeft:270,marginTop:180}}>
      <TouchableOpacity onPress={()=>{
        const options = {
          title: 'Hola! choose your story',
          noData: true, 
          mediaType: 'mixed',
        };
  
   ImagePicker.showImagePicker(options, (response) => {
     var photo = null;
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');}
        else{
          photo = { uri: response.uri };
          //setImageSource(source.uri);
          setTimeout(function(){
 
            //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
            navigation.navigate('Home2',{urip:imageSource, stori:response.uri});
       
          }, 500);
         
        }
    });
    
 }} style={styles.button}>
        <Text style={{fontSize:40,textAlign:'center',justifyContent:'center',color:'#ffff00'}}>+</Text>
    </TouchableOpacity>
    </View>
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
      marginRight:100 
  
    },
    image:{
      position:'absolute',
      width: 200,
      height: 200,
      borderRadius: 100 / 1,
      backgroundColor: "blue",
      zIndex:4
    },
    button:{
      borderWidth:2,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:30,
      height:30,
      backgroundColor:'#33cccc',
      borderRadius:40   
    },
  });