import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ViewClimbScreen = props => {
    return (
    <View>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={props.boulderData} 
        renderItem={itemData => 
            <View>
                <Text>{itemData.item.value}</Text>
            </View>
        }
        />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ViewClimbScreen;