import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 157,
    marginLeft: 5,
  },
  imageContainer: {
    height: 80,
    width: 150,
    flexDirection: 'row-reverse',
  },
  image: {
    width: '100%',
    height: 80,
    width: 150,
    resizeMode: 'cover',
    position: 'absolute',
  },
  timeContainer: {
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 5,
    padding: 3,
    alignSelf: 'flex-end',
  },
  time: {
    fontSize: 10,
    color: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  textContainer: {
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  text: {
    fontSize: 13,
  },
  icon: {
    marginTop: 3,
  },
});
