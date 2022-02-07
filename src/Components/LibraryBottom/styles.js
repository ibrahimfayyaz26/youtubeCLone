import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  con: {
    width: '100%',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  textBottom: {marginLeft: 15},
  image: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    marginLeft: -15,
  },
});
