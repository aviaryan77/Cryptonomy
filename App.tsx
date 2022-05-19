import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigator from './navigations';
import io from 'socket.io-client';
import {baseURL} from './constants';
import {theme} from './constants/theme';

export const socket = io(baseURL);

socket.on('connect', () => console.log('Socket connection established'));
socket.on('disconnect', () => console.log('Socket disconnected'));
socket.on('error', () => console.log('Socket error'));

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <MainNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});
