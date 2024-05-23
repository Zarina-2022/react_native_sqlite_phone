import {Image, View} from 'react-native';
import React from 'react';
import {avatarStyle} from './style';
const Avatar = ({photo}) => {
  return (
    <View>
      {photo ? (
        <Image
          style={avatarStyle.image}
          source={{
            uri: photo,
          }}
        />
      ) : (
        <Image
          style={avatarStyle.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
      )}
    </View>
  );
};
export default Avatar;
