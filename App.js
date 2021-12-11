import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import MainHeader from './components/MainHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <MainHeader title={"header"}/>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
