import {View, Text, ScrollView} from 'react-native';
import VideoCard from '../../Components/VideoCard';
import Videos from '../../../Youtube Assets/Youtube Assets/data/videos.json';
import React from 'react';
import AvatarList from '../../Components/AvatarList';
import SubList from '../../Components/SubVideoList';
import {styles} from './styles';

const Subscriptions = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 1.25, backgroundColor: '#e6e6e6'}} />
      <AvatarList />
      <SubList />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 150}}>
        {Videos.map(i => (
          <VideoCard key={i.id} item={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Subscriptions;
