import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 200,
    flexDirection: 'row-reverse',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
  },
  imageTimeContainer: {
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 10,
    padding: 3,
    alignSelf: 'flex-end',
  },
  imageTime: {
    fontSize: 12,
    color: 'white',
  },
  infoContainer: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 5,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 5,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  lowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
  },
  icon: {
    marginTop: 10,
  },
});
