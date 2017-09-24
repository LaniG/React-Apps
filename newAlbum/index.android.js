//Index.Android.js Place code here for Android!!

//Import a library to help create a component (to get things to show on screen)
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component, one component per file
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'ALBUMS'} />
    <AlbumList />
  </View>

  );

// Render it to the device (place the content on the device screen)
AppRegistry.registerComponent('albums', () => App);
//only used at the app level for the top most item to be shown to the user first
