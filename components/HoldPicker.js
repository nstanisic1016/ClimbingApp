import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from '../constants/Color';
import { Picker } from "@react-native-picker/picker";

const HoldPicker = props => {

  return (
    <View style={styles.screen}>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.text}>Crux Hold: </Text>
      </View>
      <Picker
        onValueChange={props.onValueChange}
        selectedValue={props.onSelectedValue}
        mode="dialogue"
        itemStyle={{height:50}}
        style={{width:'50%'}}
      >
        <Picker.Item label="Select Hold" value="" />
        <Picker.Item label="Incut crimp" value="Incut crimp" />
        <Picker.Item label="Flat crimp" value="Flat crimp" />
        <Picker.Item label="Sloping crimp" value="Sloping crimp" />
        <Picker.Item label="Sloper" value="Sloper" />
        <Picker.Item label="Jug" value="Jug" />
        <Picker.Item label="Narrow Pinch" value="Narrow Pinch" />
        <Picker.Item label="Regular Pinch" value="Regular Pinch" />
        <Picker.Item label="Wide Pinch" value="Wide Pinch" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Color.accent1,
  },
  text: {
    fontSize: 24,
    color: Color.accent3
  }
});

export default HoldPicker;