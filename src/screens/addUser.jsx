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
});
const AddUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(
    'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png',
  );
  const navigation = useNavigation();
  const insertUser = () => {
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO users (name, surname, phone, age, photo) VALUES (?, ?, ?, ?, ?)`,
        [name, surname, phone, age, photo],
        (sqlTxn, res) => {
          console.log(`${name} ${surname} successfully added`);
          Alert.alert('SUCCESS', `${name} ${surname} added successfully.`, [
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
        (_, error) => {
          console.error('Error inserting user:', error);
          Alert.alert('Error', 'Failed to add user.');
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
          title="Save"
          onPress={() => insertUser()}
          bgColor={COLORS.Green}
          textColor={COLORS.White}
          marginHorizontal={20}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddUser;
