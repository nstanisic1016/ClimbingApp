import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from '../constants/Color';
import { Picker } from "@react-native-picker/picker";

const AnglePicker = props => {

  return (
    <View style={styles.screen}>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.text}>Angle: </Text>
      </View>
      <Picker
        onValueChange={props.onValueChange}
        selectedValue={props.onSelectedValue}
        mode="dialogue"
        itemStyle={{height:50}}
        style={{width:'50%'}}
      >
        <Picker.Item label="Select Angle" value="" />
        <Picker.Item label="Slab" value="Slab" />
        <Picker.Item label="Vertical" value="Vertical" />
        <Picker.Item label="0-15 Overhung" value="0-15 Degrees Overhung" />
        <Picker.Item label="15- 30 Overhung" value="15-30 Degrees Overhung" />
        <Picker.Item label="30-45 Overhung" value="30-45 Degrees Overhung" />
        <Picker.Item label="45-60 Overhung" value="45-60 Degrees Overhung" />
        <Picker.Item label="60-75 Overhung" value="60-75 Degrees Overhung" />
        <Picker.Item label="75-90 Overhung" value="75-90 Degrees Overhung" />
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

export default AnglePicker;