import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Color from '../constants/Color';

const LogScreen = props => {
    return (
        <View>
            <TextInput  {...props} style={{...styles.input, ...props.style }}/>
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