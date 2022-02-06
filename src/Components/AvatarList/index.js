import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Avatar from '../Avatar';
import {styles} from './styles';
import sub from '../../../Youtube Assets/Youtube Assets/data/sub.json';

const AvatarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={sub}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Avatar item={item} />}
        horizontal
      />
      <Text style={styles.text}>ALL</Text>
    </View>
  );
};

export default AvatarList;
