import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../style/style';
import CustomInput from '../components/ui/customInput';
import {COLORS} from '../thema/colors';
import CustomButton from '../components/ui/customButton';
import {useNavigation} from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'userDB',
  createFormLocation: '~user.db',
});
const UserUpdate = ({route}) => {
  const {user} = route.params;
  const navigation = useNavigation();
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phone, setPhone] = useState(user.phone);
  const [age, setAge] = useState(user.age);
  const [photo, setPhoto] = useState(user.photo);
  const updateUser = id => {
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE users SET name=?, surname=?, phone=?, age=?, photo=? WHERE id=? ',
        [name, surname, phone, age, photo, user.id],
        (sqlTxn, res) => {
          Alert.alert('SUCCESS', `${name} ${surname} updated successfully.`, [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
            {
              text: 'Cancel',
              onPress: () => {
                navigation.goBack();
                console.log('Cancel is pressed');
              },
              style: 'cancel',
            },
          ]);
        },
        error => {
          console.error('Error updating user:', error);
          Alert.alert('Error', 'Failed to update user.');
        },
      );
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        <ScrollView>
          <CustomInput
            size="large"
            placeholderText="Enter name"
            status="success"
            onChangeText={text => setName(text)}
            value={name}
            label="Name"
            textColor={COLORS.darkGray}
            textSize={{fontSize: 18}}
            placeholderTextColor={COLORS.Gray}
            bgColor={COLORS.lightGray}
          />
          <CustomInput
            size="large"
            placeholderText="Enter surname"
            status="success"
            onChangeText={text => setSurname(text)}
            value={surname}
            label="Surname"
            textColor={COLORS.darkGray}
            textSize={{fontSize: 18}}
            placeholderTextColor={COLORS.Gray}
            bgColor={COLORS.lightGray}
          />
          <CustomInput
            size="large"
            placeholderText="Enter phone number"
            status="success"
            onChangeText={text => setPhone(text)}
            value={phone}
            label="Phone"
            textColor={COLORS.darkGray}
            textSize={{fontSize: 18}}
            placeholderTextColor={COLORS.Gray}
            bgColor={COLORS.lightGray}
          />
          <CustomInput
            size="large"
            placeholderText="Enter age"
            status="success"
            onChangeText={text => setAge(text)}
            value={age}
            label="Age"
            textColor={COLORS.darkGray}
            textSize={{fontSize: 18}}
            placeholderTextColor={COLORS.Gray}
            bgColor={COLORS.lightGray}
          />
        </ScrollView>
      </View>
      <View>
        <CustomButton
          title="Update"
          onPress={() => updateUser()}
          bgColor={COLORS.Orange}
          textColor={COLORS.White}
          marginHorizontal={20}
        />
      </View>
    </SafeAreaView>
  );
};
export default UserUpdate;
