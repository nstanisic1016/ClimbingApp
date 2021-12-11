import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const LogScreen = props => {
    return <TextInput  {...props} style={{...styles.input, ...props.style }}/>
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