import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import MainScreenButton from '../buttons/MainScreenButton';
import Colors from '../constants/Color';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <ImageBackground source = {require('../assets/Mount.png')} resizeMode="cover" style={styles.image}>
            <MainScreenButton style={styles.profile} title="Profile"/>
            <MainScreenButton style={styles.viewClimbs} title="View Climbs"/>
            <MainScreenButton style={styles.logClimbs} title="Log Climbs"/>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    profile: {
        backgroundColor: Colors.accent2,
        paddingHorizontal: 100
    },
    viewClimbs: {
        backgroundColor: Colors.accent2
    },
    logClimbs: {
        backgroundColor: Colors.accent2
    },
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default HomeScreen;