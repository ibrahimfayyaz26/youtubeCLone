import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LibraryHeader from '../../Components/LibraryHeaderList';
import LibraryCatList from '../../Components/LibraryCatList';
import LibraryBottom from '../../Components/LibraryBottom';

const Library = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{width: '100%', height: 2, backgroundColor: '#e6e6e6'}} />
      <LibraryHeader />
      <LibraryCatList />
      <LibraryBottom />
    </ScrollView>
  );
};

export default Library;
