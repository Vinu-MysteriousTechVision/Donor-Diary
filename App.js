/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import ImageResizer from 'react-native-image-resizer';
import RNGooglePlaces from 'react-native-google-places';
import FetchBlob from 'react-native-fetch-blob';
import Dialogue from 'react-native-dialogue';
import CustomComponents from 'react-native-deprecated-custom-components';
import codePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'We Make A Living\nBy What We Get,\nBut We Make A Life\nBy What We Give',
  android: 'We Make A Living\nBy What We Get,\nBut We Make A Life\nBy What We Give',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
