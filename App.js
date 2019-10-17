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
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import List from './List';
import Info from './Info';
import Add from './Add';

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
    Add: {
      screen: Add,
    },
  },
  {
    // initialRouteName: "Auth",
    headerMode: 'none',
  },
);

const Navigator = createAppContainer(AppNavigator);

export default function() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
