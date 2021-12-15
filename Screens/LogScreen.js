import React, {useState} from 'react';
import { StyleSheet, Picker, View, Text, TouchableOpacity, Button } from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';
import boulderObj from '../components/BoulderObj';
import BoulderView from './BoulderView';
import RouteView from './RouteView';
import MainScreenButton from '../buttons/MainScreenButton';


const LogScreen = props => {

    const [boulderList, setBoulderList] = useState([]);
    const [isBoulder, setIsBoulder] = useState(false);
    const [isRoute, setIsRoute] = useState(false);
    
    let content = <View style={{flex: 1}}>
        <Text> Base View </Text>
    </View>;

    const addBoulderHandler = boulderTitle => {
        //Here we set course goals by setting course goals to a function that updates the courseGoals array.
        setBoulderList(currentBoulderList => [
          ...currentBoulderList,
          { id: Math.random().toString(), value: boulderTitle}
        ]
        );
        props.onAddBoulder(boulderList);
        console.log({boulderTitle})
    };

    const boulderHandler = () => {
        setIsBoulder(true);
        setIsRoute(false);
    };

    const routeHandler = () => {
        setIsRoute(true);
        setIsBoulder(false);
    };

    if (isBoulder) {
        content = <BoulderView onAddBoulder={addBoulderHandler}/>
    }
    else if (isRoute) {
        content = <RouteView/>
    }


    return (
        <View style={styles.screen}>
            <View style={styles.sidebyside}>
                <Text style= {styles.headerLabels}> Type: </Text>
                <MainScreenButton style={{marginHorizontal: 10}} title="Boulder" onPress={() => {boulderHandler()}}/>
                <MainScreenButton style={{marginHorizontal: 10}} title="Roped Climb" onPress={() => {routeHandler()}}/>
            </View>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    buttonContainer: {
        flex:1,
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
    },
    sidebyside:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
});

export default LogScreen;