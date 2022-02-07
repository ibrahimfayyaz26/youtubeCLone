import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import VideoMiniCard from '../VideoMiniCard';
import {styles} from './styles';
import videos from '../../../Youtube Assets/Youtube Assets/data/videos.json';

const LibraryHeader = () => {
  return (
    <View style={styles.container}>
      {/* Recent */}
      <Text style={styles.text}>Recent</Text>
      {/* recent played videos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {videos.map(i => (
          <VideoMiniCard item={i} key={i.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LibraryHeader;
