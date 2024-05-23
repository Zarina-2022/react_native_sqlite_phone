import {
  Alert,
  Linking,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {userCardStyle} from './style';
import Avatar from '../ui/avatar';
import {Call, Edit2, UserRemove} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/route';
const UserCard = ({item, onDelete}) => {
  const navigation = useNavigation();
  const {userUpdate} = SCREENS;
  if (!item) return null;
  const callPhone = () => {
    const url = `tel:${item.phone}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Not supported phone number');
        }
      })
      .catch(error => {
        console.error('An error occurred while checking phone support:', error);
      });
  };
  const deleteUser = () => {
    Alert.alert(
      'Delete User',
      `Are you sure you want to delete ${item.name} ${item.surname}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => onDelete(),
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={userCardStyle.container1}>
      <Pressable>
        <Avatar photo={item.photo} />
      </Pressable>
      <Pressable style={userCardStyle.nameContainer}>
        <Text style={userCardStyle.name}>
          {item.name}
          {'  '}
          {item.surname}
        </Text>
        <Text style={userCardStyle.phone}>{item.phone}</Text>
      </Pressable>
      <TouchableOpacity
        onPress={callPhone}
        style={userCardStyle.phoneContainer}>
        <Call size="28" color={COLORS.Green} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(userUpdate, {user: item})}
        style={userCardStyle.phoneContainer}>
        <Edit2 size="28" color={COLORS.Orange} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={deleteUser}
        style={userCardStyle.phoneContainer}>
        <UserRemove size="28" color={COLORS.Red} variant="Bold" />
      </TouchableOpacity>
    </View>
  );
};
export default UserCard;
