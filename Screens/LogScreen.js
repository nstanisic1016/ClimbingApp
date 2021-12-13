import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Color from '../constants/Color';

const LogScreen = props => {
    return (
        <View>
            <Text> Date </Text>
            <Text> Tick </Text>
            <Text> Type </Text>
            <Text> Style </Text>
            <Text> Where </Text>
            <Text> Notes </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10
    },
});

export default LogScreen;