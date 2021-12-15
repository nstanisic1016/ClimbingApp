import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';
import BoulderPicker from '../components/BoulderPicker';

const BoulderView = props => {
    
    const [boulderGrade, setBoulderGrade] = useState('');

    const addBoulderHandler = () => {
        props.onAddBoulder(boulderGrade);
        console.log({boulderGrade});
        setBoulderGrade('');
    }
    
    return (
    <View style={styles.screen}>
        <BoulderPicker onValueChange={(value, index) => 
          setBoulderGrade(value)} onSelectedValue={boulderGrade}/>
        <View style={styles.textView}>
            <Text style= {styles.headerLabels}> Style </Text>
            <Text style= {styles.headerLabels}> Where </Text>
            <Text style= {styles.headerLabels}> Notes </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={addBoulderHandler}>
                <Text style= {Texts.button} >Log It!</Text>
            </TouchableOpacity> 
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 10
    },
    textView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },  
    buttonContainer: {
        flex: 1,
        elevation: 8,
        backgroundColor: Color.accent2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: Color.accent3,
        borderWidth: 2,
        marginVertical:200,
        marginHorizontal:10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.86,  
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10
    },
    headerLabels: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "flex-start"
    },
});

export default BoulderView;