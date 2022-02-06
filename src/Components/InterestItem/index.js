import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const IntrestItem = props => {
  return (
    <View style={[styles.intrest, props.style]}>
      <Text style={styles.intrestText}>{props.item} </Text>
    </View>
  );
};

export default IntrestItem;
