import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LibraryBottom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayLists</Text>
      <View style={styles.con}>
        {/* Icon */}
        <AntDesign name="plus" size={23} color="#0467b3" />
        <Text style={styles.text}>New playlist </Text>
      </View>
      <View style={styles.con}>
        {/* Icon */}
        <AntDesign name="like2" size={23} />
        <View>
          <Text style={styles.text}>Liked videos </Text>
          <Text style={styles.textBottom}>6 videos</Text>
        </View>
      </View>
      <View style={styles.con}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg',
          }}
        />
        <View>
          <Text style={styles.text}>Realtime Chat App</Text>
          <Text style={styles.textBottom}>Vadim Savin</Text>
        </View>
      </View>
      <View style={styles.con}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg',
          }}
        />
        <View>
          <Text style={styles.text}>Build the Uber clone</Text>
          <Text style={styles.textBottom}>Vadim Savin</Text>
        </View>
      </View>
      <View style={styles.con}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg',
          }}
        />
        <View>
          <Text style={styles.text}>Build the Uber clone</Text>
          <Text style={styles.textBottom}>Vadim Savin</Text>
        </View>
      </View>
      <View style={styles.con}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg',
          }}
        />
        <View>
          <Text style={styles.text}>Build the Uber clone</Text>
          <Text style={styles.textBottom}>Vadim Savin</Text>
        </View>
      </View>
    </View>
  );
};

export default LibraryBottom;
