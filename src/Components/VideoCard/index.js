import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const VideoCard = ({item}) => {
  return (
    <View style={styles.container}>
      {/* Thumbnail */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View style={styles.imageTimeContainer}>
          <Text style={styles.imageTime}>{item.duration}</Text>
        </View>
      </View>
      {/* view */}
      <View style={styles.infoContainer}>
        {/* avatar */}
        <Image
          style={styles.avatar}
          source={{
            uri: item.user.image,
          }}
        />
        {/* view */}
        <View style={styles.textContainer}>
          {/* title */}
          <Text style={styles.title}>{item.title}</Text>
          {/* View */}
          <View style={styles.lowContainer}>
            {/* name */}
            <Text style={styles.text}>{item.user.name} - </Text>
            {/* views */}
            <Text style={styles.text}>{item.views} views - </Text>
            {/* time ago */}
            <Text style={styles.text}>{item.createdAt} </Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={18} style={styles.icon} />
      </View>
    </View>
  );
};

export default VideoCard;
