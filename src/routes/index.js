import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ListPost,DetailPost } from '../containers/Home'
import { ListNews,DetailNews } from '../containers/News'
import { Profile } from '../containers/Profile'
import SplashScreen from '../containers/SplashScreen'
import {SignIn} from '../containers/Auth'
import IntroApp from '../containers/IntroApp'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
      headerShown:false
    }} /> 
    <Stack.Screen name="IntroApp" component={IntroApp} options={{
      headerShown:false
    }} />
    <Stack.Screen name="SignIn" component={SignIn} options={{
      headerShown:false
    }} />
    <Stack.Screen name="MainRoute" component={Tabs} options={{
      headerShown:false
    }} />
  </Stack.Navigator>
  )
}
function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeRoute}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="post" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsRoute}
          options={{
            title: "News",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileRoute}
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-profile" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  )
}

function HomeRoute(){
  return(
    <Stack.Navigator >
    <Stack.Screen name="ListPost" component={ListPost} options={{
      title: "CircleGame",
    }} />
    <Stack.Screen name="DetailPost" component={DetailPost} options={{
      title: "Detail Post",
    }} />
  </Stack.Navigator>
  )
}

function NewsRoute(){
  return(
    <Stack.Navigator >
    <Stack.Screen name="ListNews" component={ListNews} options={{
      title: "News CircleGame",
    }} />
    <Stack.Screen name="DetailNews" component={DetailNews} options={{
      title: "Detail News",
    }} />
  </Stack.Navigator>
  )
}

function ProfileRoute() { 
  return(
    <Stack.Navigator >
    <Stack.Screen name="Profile" component={Profile} options={{
      title: "Profile",
    }} />
  </Stack.Navigator>
  )
}
export{Route}