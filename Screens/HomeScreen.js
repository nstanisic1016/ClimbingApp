import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import MainScreenButton from '../buttons/MainScreenButton';
import Colors from '../constants/Color';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <MainScreenButton style={styles.profile} title="Profile"/>
            <MainScreenButton style={styles.viewClimbs} title="View Climbs"/>
            <MainScreenButton style={styles.logClimbs} title="Log Climbs"/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    profile: {
        backgroundColor: Colors.accent2,
    },
    viewClimbs: {
        backgroundColor: Colors.accent2
    },
    logClimbs: {
        backgroundColor: Colors.accent2
    }
});

export default HomeScreen;