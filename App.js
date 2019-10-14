/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import List from './List';
import Info from './Info';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            backgroundColor: '#f0f0fa',
          }}>
          <Header title="MyGardu" noIcon />
          <List />
        </View>
      </SafeAreaView>
    </>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
    Info: {
      screen: Info,
    },
  },
  {
    // initialRouteName: "Auth",
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
