import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import MainScreenButton from '../buttons/MainScreenButton';

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
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    profile: {
        backgroundColor: 'green',
        paddingHorizontal: 100
    },
    viewClimbs: {
        backgroundColor: 'blue'
    },
    logClimbs: {
        backgroundColor: 'purple'
    }
});

export default HomeScreen;