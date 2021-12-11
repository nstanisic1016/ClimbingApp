import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';

const MainScreenButton = props => {
    return (
        <TouchableOpacity onpress={props.press} style={{...styles.buttonContainer, ...props.style}}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: Color.primary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%'
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export default MainScreenButton;