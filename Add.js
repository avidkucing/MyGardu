/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {showLocation} from 'react-native-map-link';
import openMap from 'react-native-open-maps';
import {connect} from 'react-redux';
import {addContent} from './actions';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import List from './List';
import {Icon} from 'react-native-elements';
import LabeledText from './LabeledText';
import LabeledTextInput from './LabeledTextInput';
import ButtonSecondary from './ButtonSecondary';
import ButtonPrimary from './ButtonPrimary';

const Info: () => React$Node = ({navigation, addContent}) => {
  const [name, setName] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  // function saveItem(item) {
  //   storageData[item.id] = item;
  //   AsyncStorage.setItem('data', JSON.stringify(storageData));
  // }

  function clear() {
    setName();
    setLat();
    setLong();
  }

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            backgroundColor: '#f0f0fa',
          }}>
          <Header title="Gardu Info" />
          <View
            style={{
              height: 250,
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 10,
              marginBottom: 0,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flex: 1,
                padding: 20,
                paddingBottom: 0,
              }}>
              <LabeledTextInput
                value={name}
                setValue={setName}
                icon="hash"
                iconType="feather"
                label="Gardu Name"
              />
            </View>
            <View
              style={{
                flex: 1,
                padding: 20,
                paddingBottom: 0,
              }}>
              <LabeledTextInput
                value={lat}
                setValue={setLat}
                icon="hash"
                iconType="feather"
                label="Gardu Latitude"
              />
            </View>
            <View
              style={{
                flex: 1,
                padding: 20,
                paddingBottom: 0,
              }}>
              <LabeledTextInput
                value={long}
                setValue={setLong}
                icon="hash"
                iconType="feather"
                label="Gardu Longitude"
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <ButtonPrimary
              text="Save"
              onPress={() => {
                addContent({
                  name: name,
                  lat: lat,
                  long: long,
                });
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default connect(
  null,
  {addContent},
)(Info);
