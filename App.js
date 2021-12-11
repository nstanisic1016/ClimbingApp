import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import MainHeader from './components/MainHeader';
import Colors from './constants/Color';


export default function App() {
  return (
    <View style={styles.container}>
      <MainHeader title={"Climbing Tracker"}/>
      <HomeScreen />
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
