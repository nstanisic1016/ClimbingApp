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
        flex:1,
        elevation: 8,
        backgroundColor: Color.accent2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: Color.accent3,
        borderWidth: 2,
        marginVertical: 50,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export default MainScreenButton;