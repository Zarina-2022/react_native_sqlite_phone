import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';

export const userCardStyle = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical:10
  },
  phoneContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 70,
  },
  nameContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    marginTop: 3,
    color: COLORS.darkGray,
  },
});
