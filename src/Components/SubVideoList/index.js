import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import IntrestItem from '../InterestItem';
import {styles} from './styles';

const SubList = () => {
  const [color, setColor] = useState('All');

  const data = [
    'All',
    'Today',
    'Continue watching',
    'Unwatched',
    'Live',
    'Posts',
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {data.map(i => (
        <Pressable onPress={() => setColor(i)}>
          <IntrestItem
            key={i}
            item={i}
            style={{backgroundColor: color == i ? '#a8a8a8' : '#e8e8e8'}}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default SubList;
