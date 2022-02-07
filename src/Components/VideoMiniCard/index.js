import {View, Text, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';

const VideoMiniCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>24:2</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title.length > 20
              ? item.title.slice(0, 20) + '... '
              : item.title}
          </Text>
          <Text style={styles.text}>{item.user.name}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} style={styles.icon} />
      </View>
    </View>
  );
};

export default VideoMiniCard;
