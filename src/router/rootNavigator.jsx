import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/route';
import UserList from '../screens/userList';
import AddUser from '../screens/addUser';
import UserUpdate from '../screens/userUpdate';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {addUser, userList, userUpdate} = SCREENS;
  return (
    <Stack.Navigator>
      <Stack.Screen name={userList} component={UserList} />
      <Stack.Screen name={addUser} component={AddUser} />
      <Stack.Screen name={userUpdate} component={UserUpdate} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
