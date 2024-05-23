import {TouchableOpacity} from 'react-native';
import React from 'react';
import {fabStyle} from './style';
const FlatActionButton = ({bgColor, onPress, icon: Icon, iconColor, size}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[fabStyle.container, {backgroundColor: bgColor}]}>
         {Icon && <Icon size={size} color={iconColor} />}
    </TouchableOpacity>
  );
};
export default FlatActionButton;
