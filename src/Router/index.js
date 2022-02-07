import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import SubStack from './SubStack';
import LibraryStack from './LibraryStack';
import Tab from './Tab';

const Main = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default Main;
