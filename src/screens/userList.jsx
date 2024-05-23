import {FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import FlatActionButton from '../components/ui/fab';
import {COLORS} from '../thema/colors';
import {UserAdd} from 'iconsax-react-native';
import UserCard from '../components/user-list/userCard';
import {userListStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../utils/route';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'userDB',
});
const UserList = () => {
  const navigation = useNavigation();
  const {addUser} = SCREENS;
  const [users, setUsers] = useState([]);
  const createUserTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), surname VARCHAR(30), phone VARCHAR(30), age VARCHAR(10), photo VARCHAR(30))',
        [],
        (sqlTxn, res) => {
          console.log('Table is created');
        },
        error => {
          console.log('Table is not created. ERROR: ' + error.message);
        },
      );
    });
  };
  const getUsers = () => {
    db.transaction(txn => {
      txn.executeSql(
        // tum userlari(SELECR *) users tablosundan (users) id'sine gore artandan-azalana (DESC), id'sine gore (id) listele (order by)
        `SELECT * FROM users ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          let length = res.rows.length;
          let result = [];
          if (length > 0) {
            for (let i = 0; i < length; i++) {
              let item = res.rows.item(i);
              result.push(item);
            }
            setUsers(result);
          }
        },
        error => {
          console.log('Error occurred during fetching data: ' + error.message);
        },
      );
    });
  };
  const deleteUser = userId => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM users WHERE id = ?`,
        [userId],
        (sqlTxn, res) => {
          console.log(`User with ID ${userId} deleted successfully`);
          getUsers(); // Refresh the user list
        },
        error => {
          console.error(
            `Error deleting user with ID ${userId}: ${error.message}`,
          );
          Alert.alert('Error', 'Failed to delete user.');
        },
      );
    });
  };

  useEffect(() => {
    createUserTable();
    getUsers();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={userListStyle.listContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={getUsers} />
          }
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <UserCard item={item} onDelete={() => deleteUser(item.id)} />
          )}
        />
      </View>
      <View style={userListStyle.addButtonContainer}>
        <FlatActionButton
          onPress={() => navigation.navigate(addUser)}
          bgColor={COLORS.Green}
          icon={UserAdd}
          iconColor={COLORS.White}
          size={35}
        />
      </View>
    </SafeAreaView>
  );
};
export default UserList;
