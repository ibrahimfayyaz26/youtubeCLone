import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const logo = require('../assets/logo.png');

const Header = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          resizeMode="contain"
          style={{width: 100, height: 25}}
          source={logo}
        />

        <View
          style={{
            flexDirection: 'row',
            width: 150,
            justifyContent: 'space-between',
          }}>
          <Feather name="cast" size={23} color="#525151" />
          <AntDesign name="bells" size={23} color="#525151" />
          <AntDesign name="search1" size={23} color="#525151" />
          <FontAwesome name="user-circle-o" size={23} color="#525151" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
