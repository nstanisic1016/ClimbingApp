import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Color from '../constants/Color';

const BoulderNameInput = props => {
    
    const [enteredName, setEnteredName] = useState('');
    
    const boulderInputHandler = (enteredText) => {
        setEnteredName(enteredText);
    };

    return (
            <View style={styles.containerUpper}>   
                    <TextInput placeholder="Boulder Name" 
                    style={styles.containerTextbox}
                    onChangeText={boulderInputHandler}
                    value={enteredName}
                    />
            </View>
    );
};

const styles = StyleSheet.create({ 
    containerTextbox: {
        width: '80%', 
        borderColor: 'black',
        borderWidth: 1, 
        padding: 10,
        marginTop: 10,
      },
      containerUpper: { 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Color.accent1 
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%'
      }

});

export default BoulderNameInput;