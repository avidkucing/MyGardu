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
import {editContent} from './actions';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import List from './List';
import {Icon} from 'react-native-elements';
import LabeledText from './LabeledText';
import LabeledTextInput from './LabeledTextInput';
import ButtonSecondary from './ButtonSecondary';
import ButtonPrimary from './ButtonPrimary';

const Info: () => React$Node = ({navigation, editContent}) => {
  const item = navigation.getParam('item');

  const [edit, setEdit] = useState(false);

  const [name, setName] = useState(item.name ? item.name : '');
  const [lat, setLat] = useState(item.lat ? item.lat : '');
  const [long, setLong] = useState(item.long ? item.long : '');

  // function saveItem(item) {
  //   storageData[item.id] = item;
  //   AsyncStorage.setItem('data', JSON.stringify(storageData));
  // }

  function clear() {
    setName(item.name ? item.name : '');
    setLat(item.lat ? item.lat : '');
    setLong(item.long ? item.long : '');
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
            {edit ? (
              <>
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
              </>
            ) : (
              <>
                <View
                  style={{
                    flex: 1,
                    padding: 20,
                    paddingBottom: 0,
                  }}>
                  <LabeledText
                    icon="hash"
                    iconType="feather"
                    label="Gardu Name"
                    text={item.name ? item.name : '-'}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: 20,
                    paddingBottom: 0,
                  }}>
                  <LabeledText
                    icon="hash"
                    iconType="feather"
                    label="Gardu Latitude"
                    text={item.lat ? item.lat : '-'}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: 20,
                    paddingBottom: 0,
                  }}>
                  <LabeledText
                    icon="hash"
                    iconType="feather"
                    label="Gardu Longitude"
                    text={item.long ? item.long : '-'}
                  />
                </View>
              </>
            )}
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
            }}>
            <ButtonSecondary
              text={edit ? 'Cancel' : 'Edit'}
              onPress={() => {
                setEdit(!edit);
                clear();
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <ButtonPrimary
              text={edit ? 'Save' : 'View on GMaps'}
              onPress={
                edit
                  ? () => {
                      editContent({
                        id: item.id,
                        name: name,
                        lat: lat,
                        long: long,
                      });
                      setEdit(false);
                    }
                  : () =>
                      Linking.openURL('geo:?q=' + item.lat + ',' + item.long)
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default connect(
  null,
  {editContent},
)(Info);
