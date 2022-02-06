import {View, Text, Pressable, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IntrestItem from '../InterestItem';

const Intrest = () => {
  const [color, setColor] = useState('All');
  const data = ['Mix', 'Music', 'Code', 'Ali'];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {/* explore */}
      <Pressable style={styles.exploreContainer}>
        <MaterialIcons name="explore" size={22} />
        <Text style={styles.exploreText}>Explore </Text>
      </Pressable>
      {/* line */}
      <View style={styles.line} />
      {/* list */}
      <View style={styles.intrestContainer}>
        <Pressable onPress={() => setColor('All')}>
          <IntrestItem
            item="All"
            style={{backgroundColor: color == 'All' ? '#a8a8a8' : '#e8e8e8'}}
          />
        </Pressable>
        {data.map(i => (
          <Pressable onPress={() => setColor(i)}>
            <IntrestItem
              key={i}
              item={i}
              style={{backgroundColor: color == i ? '#a8a8a8' : '#e8e8e8'}}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Intrest;
