import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Color';
import text from '../constants/Text';

const MainHeader = props => {
    return (
        <View style={styles.header}>
            <Text style={text.header}> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 32,
        backgroundColor: Colors.accent3,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainHeader;