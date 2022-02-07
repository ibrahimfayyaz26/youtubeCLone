import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SubStack from './SubStack';
import LibraryStack from './LibraryStack';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'black'}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Foundation name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="google-photos"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="pluscircleo" size={30} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="SubTab"
        component={SubStack}
        options={{
          title: 'Subscriptions',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="subscriptions" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryStack}
        options={{
          title: 'Library',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="video-collection" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
