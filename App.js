import React, { Component,useState} from 'react';
import {View,Text,Button,} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ApolloProvider,  ApolloClient,  createHttpLink,  InMemoryCache,gql,useQuery} from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './app/components/Home';
import {Home2} from './app/components/Home2';
import {story} from "./app/components/story";
import {last } from "./app/components/Last";
const Stack = createStackNavigator();
const client = new ApolloClient({
  uri: 'http://192.168.43.27:4000/graphql',
  cache: new InMemoryCache()
});   

function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{title:'Home'}}/>
        <Stack.Screen name="Home2" component={Home2} options={{title:'Story added successfully'}} />
        <Stack.Screen name="Story" component={story}   options={{title:'', headerShown:false}} />
        <Stack.Screen name="Last" component={last} options={{title:'Story viewed successfully'}} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
