import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LogScreen from './Screens/LogScreen';
import MainHeader from './components/MainHeader';
import Colors from './constants/Color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Screens/ProfileScreen';
import ViewClimbScreen from './Screens/ViewClimbScreen';

StatusBar. setBarStyle('light-content', true);
 

export default function App() {
const Stack = createStackNavigator();


  return (
    <View style={styles.container}>
      <MainHeader title={"Climbing Tracker"}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home Screen"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Profile Screen"
            component={ProfileScreen}
          />
          <Stack.Screen
            name="View Screen"
            component={ViewClimbScreen}
          />
          <Stack.Screen
            name="Log Screen"
            component={LogScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
