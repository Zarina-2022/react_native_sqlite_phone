import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {buttonStyle} from './style';
const CustomButton = ({title, onPress, bgColor, textColor, marginHorizontal}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          buttonStyle.container,
          {backgroundColor: bgColor, marginHorizontal: marginHorizontal},
        ]}>
        <Text style={[buttonStyle.text, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
