import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Avatar = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.uri,
        }}
      />
      <Text style={styles.text}>
        {item.name.length > 6 ? item.name.slice(0, 6) + '... ' : item.name}
      </Text>
    </View>
  );
};

export default Avatar;
