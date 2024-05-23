import {View, Text} from 'react-native';
import React from 'react';
// UI Kitten
import {Input} from '@ui-kitten/components';
import {inputStyle} from './style';
const CustomInput = ({
  placeholderText,
  onChangeText,
  value,
  label,
  size,
  textColor,
  textSize,
  placeholderTextColor,
  bgColor,
}) => {
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.text}>{label}:</Text>
      <Input
        style={[inputStyle.inputContainer, {backgroundColor: bgColor}]}
        size={size}
        value={value}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        textStyle={[textColor, textSize]}
      />
    </View>
  );
};
export default CustomInput;
