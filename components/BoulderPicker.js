import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from '../constants/Color';
import { Picker } from "@react-native-picker/picker";

const BoulderPicker = props => {

  return (
    <View style={styles.screen}>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.text}>Boulder Grade: </Text>
      </View>
      <Picker
        onValueChange={props.onValueChange}
        selectedValue={props.onSelectedValue}
        mode="dialogue"
        itemStyle={{height:50}}
        style={{width:'50%'}}
      >
        <Picker.Item label="Select grade" value="" />
        <Picker.Item label="V0" value="V0" />
        <Picker.Item label="V1" value="V1" />
        <Picker.Item label="V2" value="V2" />
        <Picker.Item label="V3" value="V3" />
        <Picker.Item label="V4" value="V4" />
        <Picker.Item label="V5" value="V5" />
        <Picker.Item label="V6" value="V6" />
        <Picker.Item label="V7" value="V7" />
        <Picker.Item label="V8" value="V8" />
        <Picker.Item label="V9" value="V9" />
        <Picker.Item label="V10" value="V10" />
        <Picker.Item label="V11" value="V11" />
        <Picker.Item label="V12" value="V12" />
        <Picker.Item label="V13" value="V13" />
        <Picker.Item label="V14" value="V14" />
        <Picker.Item label="V15" value="V15" />
        <Picker.Item label="V16" value="V16" />
        <Picker.Item label="V17" value="V17" />
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
  }
});

export default BoulderPicker;