import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './Header';
import Subscriptions from '../Screens/SubscriptionScreen';

const Stack = createNativeStackNavigator();

const SubStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Screen name="Home" component={Subscriptions} />
    </Stack.Navigator>
  );
};

export default SubStack;
