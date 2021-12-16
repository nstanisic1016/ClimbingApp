import React, {useState, useEffect} from 'react';
import { StyleSheet, Picker, View, Text, TouchableOpacity, Button } from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';
import boulderObj from '../components/BoulderObj';
import BoulderView from './BoulderView';
import RouteView from './RouteView';
import MainScreenButton from '../buttons/MainScreenButton';
import { useNavigation } from '@react-navigation/native';


const LogScreen = props => {

    const navigation = useNavigation();
    const [boulderList, setBoulderList] = useState([]);
    const [isBoulder, setIsBoulder] = useState(false);
    const [isRoute, setIsRoute] = useState(false);
    const [buttonOneColor, setButtonOneColor] = useState(Color.accent2)
    const [buttonTwoColor, setButtonTwoColor] = useState(Color.accent2)

    let content = <View style={{flex: 1}}>
        <Text> Base View </Text>
    </View>;

    useEffect(() => {
        console.log(boulderList);
    },[boulderList])

    const addBoulderHandler = (boulderGrade,boulderStyle,boulderHold,boulderAngle,outdoor,boulderName) => {
        //Here we set course goals by setting course goals to a function that updates the courseGoals array.
        setBoulderList(currentBoulderList => [
          ...currentBoulderList,
          {id: Math.random().toString(), 
            grade: boulderGrade, 
            style: boulderStyle, 
            hold: boulderHold, 
            angle: boulderAngle, 
            where:outdoor,
            name:boulderName}]
        );
    };
    const pushBoulderHandler = () => {
        props.onAddBoulder(boulderList);
        setIsBoulder(false);
        navigation.goBack();
    }

    const boulderHandler = () => {
        setIsBoulder(true);
        setIsRoute(false);
        setButtonOneColor(Color.accent3);
        setButtonTwoColor(Color.accent2);
    };

    const routeHandler = () => {
        setIsRoute(true);
        setIsBoulder(false);
        setButtonOneColor(Color.accent2);
        setButtonTwoColor(Color.accent3);
    };

    if (isBoulder) {
        content = <BoulderView onAddBoulder={addBoulderHandler} onPress={pushBoulderHandler}/>
    }
    else if (isRoute) {
        content = <RouteView/>
    }


    return (
        <View style={styles.screen}>
            <View style={styles.sidebyside}>
                <Text> Type: </Text>
                <MainScreenButton style={{marginHorizontal: 10, backgroundColor: buttonOneColor}} title="Boulder" onPress={() => {boulderHandler()}}/>
                <MainScreenButton style={{marginHorizontal: 10, backgroundColor: buttonTwoColor}} title="Roped Climb" onPress={() => {routeHandler()}}/>
            </View>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10
    },
    sidebyside:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
});

export default LogScreen;