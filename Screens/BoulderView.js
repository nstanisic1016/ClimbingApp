import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';
import BoulderPicker from '../components/BoulderPicker';
import BoulderNameInput from '../components/BoulderNameInput';
import StylePicker from '../components/StylePicker';
import HoldPicker from '../components/HoldPicker';
import AnglePicker from '../components/AnglePicker';
import MainScreenButton from '../buttons/MainScreenButton';

const BoulderView = props => {
    
    const [boulderGrade, setBoulderGrade] = useState('');
    const [boulderStyle, setBoulderStyle] = useState('');
    const [boulderHold, setBoulderHold] = useState('');
    const [boulderAngle, setBoulderAngle] = useState('');
    const [isOutdoor, setIsOutdoor] = useState('');
    const [buttonOneColor, setButtonOneColor] = useState(Color.accent2)
    const [buttonTwoColor, setButtonTwoColor] = useState(Color.accent2)
    const [enteredName, setEnteredName] = useState('');
    
    const boulderInputHandler = (enteredText) => {
        setEnteredName(enteredText);
    };


    const addBoulderHandler = () => {
        props.onAddBoulder(boulderGrade, boulderStyle, boulderHold, boulderAngle, isOutdoor, enteredName);
        console.log({boulderGrade} + "/" + {boulderStyle} + "/" + {boulderHold}+ "/" + {boulderAngle} + {enteredName});
        setBoulderGrade('');
        setBoulderStyle('');
        setBoulderHold('');
        setIsOutdoor('');
    };

    const outdoorHandler = () => {
        setIsOutdoor(true);
        setButtonOneColor(Color.accent2);
        setButtonTwoColor(Color.accent3);
    };

    const indoorHandler = () => {
        setIsOutdoor(false);
        setButtonOneColor(Color.accent3);
        setButtonTwoColor(Color.accent2);
    };

    let content = <View></View>;

    if (isOutdoor) {
        content = <BoulderNameInput onChangeText ={boulderInputHandler} value={enteredName}/>
    }

    return (
    <View style={styles.screen}>
        <View style={styles.sidebyside}>
                <Text> Where: </Text>
                <MainScreenButton style={{marginHorizontal: 10, backgroundColor: buttonOneColor}} title="Indoor" onPress={() => {indoorHandler()}}/>
                <MainScreenButton style={{marginHorizontal: 10, backgroundColor: buttonTwoColor}} title="Outoor" onPress={() => {outdoorHandler()}}/>
            </View>
        {content}
        <BoulderPicker 
            onValueChange={(value, index) => 
                setBoulderGrade(value)
            } 
            onSelectedValue={boulderGrade}
        />
        <StylePicker 
            onValueChange={(value,index) => 
            setBoulderStyle(value)
        }
            onSelectedValue={boulderStyle}
        />
        <HoldPicker
            onValueChange={(value,index) => 
            setBoulderHold(value)
        }
            onSelectedValue={boulderHold}
        />
        <AnglePicker 
            onValueChange={(value,index) => 
                setBoulderAngle(value)
            }
                onSelectedValue={boulderAngle}
        />
        <View style={styles.textView}>
            <Text style= {styles.headerLabels}> Notes </Text>
            <Text style= {styles.headerLabels}> Tick : Flash, Send </Text>
            <Text style= {styles.headerLabels}> Attempts </Text>
            <Text style= {styles.headerLabels}> Date </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={addBoulderHandler}>
                <Text style= {Texts.button} >Log It!</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
                <Text style= {Texts.button} >Save and Return!</Text>
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
        elevation: 8,
        backgroundColor: Color.accent2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: Color.accent3,
        borderWidth: 2,
        marginVertical:10,
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
    sidebyside:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
});

export default BoulderView;