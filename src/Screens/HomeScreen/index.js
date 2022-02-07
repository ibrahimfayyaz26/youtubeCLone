import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Intrest from '../../Components/Intrest';
import VideoCard from '../../Components/VideoCard';
import Videos from '../../../Youtube Assets/Youtube Assets/data/videos.json';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 1.25, backgroundColor: '#e6e6e6'}} />
      <Intrest />
      <View style={{width: '100%', height: 5, backgroundColor: '#e6e6e6'}} />
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
