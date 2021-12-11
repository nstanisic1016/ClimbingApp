import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import MainScreenButton from '../buttons/MainScreenButton';
import Colors from '../constants/Color';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <ImageBackground source = {require('../assets/Mount.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.buttons}>
                <MainScreenButton title="Profile"/>
                <MainScreenButton title="View Climbs"/>
                <MainScreenButton title="Log Climbs"/>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default HomeScreen;