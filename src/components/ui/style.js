import {StyleSheet} from 'react-native';
import { COLORS } from '../../thema/colors';

export const fabStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10,
    padding: 5,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
});


export const avatarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 70,
  },
});

export const inputStyle = StyleSheet.create({
  container: {
   marginVertical:15
  },
  inputContainer: {
    alignSelf:'center',
    width:'90%',
    borderRadius:10,
    borderColor: COLORS.Green
  },
  text:{
    fontSize:18,
    marginHorizontal:20,
    marginBottom:5
  }
});

export const buttonStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:10
  },
  text: {
    fontWeight: 'bold',
    fontSize:18,
    paddingVertical:3
  },
});
