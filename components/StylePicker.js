import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from '../constants/Color';
import { Picker } from "@react-native-picker/picker";

const StylePicker = props => {

  return (
    <View style={styles.screen}>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.text}>Crux Style: </Text>
      </View>
      <Picker
        onValueChange={props.onValueChange}
        selectedValue={props.onSelectedValue}
        mode="dialogue"
        itemStyle={{height:50}}
        style={{width:'50%'}}
      >
        <Picker.Item label="Select Style" value="" />
        <Picker.Item label="Endurance" value="Endurance" />
        <Picker.Item label="Power Endurance" value="Power Endurance" />
        <Picker.Item label="Powerful" value="Powerful" />
        <Picker.Item label="Technical" value="Technical" />
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

export default StylePicker;