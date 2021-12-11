import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Color';

const MainHeader = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 32,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeader: {
        color: 'black',
        fontSize: 18
    }
});

export default MainHeader;