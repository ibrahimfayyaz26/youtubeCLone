import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Intrest from '../../Components/Intrest';
import VideoCard from '../../Components/VideoCard';
import Videos from '../../../Youtube Assets/Youtube Assets/data/videos.json';

const Home = () => {
  return (
    <View style={styles.container}>
      <Intrest />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 60}}>
        {Videos.map(i => (
          <VideoCard key={i.id} item={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
