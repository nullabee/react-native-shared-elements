import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import SharedElementsScreen from './screens/SharedElementsScreen';

export default class App extends React.Component {
  render() {
      return (
        <SharedElementsScreen />
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
