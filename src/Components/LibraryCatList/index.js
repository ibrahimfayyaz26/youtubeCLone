import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LibraryCatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <FontAwesome
          name="history"
          style={{marginRight: 23}}
          color="black"
          size={23}
        />
        <Text style={styles.text}>History </Text>
      </View>
      <View style={styles.con}>
        <FontAwesome
          style={{marginRight: 23}}
          name="file-video-o"
          size={23}
          color="black"
        />
        <Text style={styles.text}>Your videos </Text>
      </View>
      <View style={styles.con}>
        <FontAwesome
          style={{marginRight: 23}}
          name="download"
          size={23}
          color="black"
        />
        <Text style={styles.text}>Downloads </Text>
      </View>
      <View style={styles.con}>
        <FontAwesome
          style={{marginRight: 23}}
          name="file-movie-o"
          size={23}
          color="black"
        />
        <Text style={styles.text}>Your movies </Text>
      </View>
      <View style={styles.con}>
        <FontAwesome
          style={{marginRight: 23}}
          name="clock-o"
          size={23}
          color="black"
        />
        <Text style={styles.text}>Watch later </Text>
      </View>
    </View>
  );
};

export default LibraryCatList;
