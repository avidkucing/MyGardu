import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, RefreshControl} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from './Loading';
import Empty from './Empty';
import {initialData} from './data';

// let storageData = AsyncStorage.getItem('data');

// if (!Array.isArray(storageData)) {
//   storageData = initialData;
// }

const List = ({navigation, isFocused}) => {
  const [data, setData] = useState(initialData);

  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // alert(JSON.stringify(initialData));
    setLoading(false);
    setEmpty(false);
    setSuccess(false);

    data && data.length === 0 && setEmpty(true);
    !data && setLoading(true);
    data && setSuccess(true);
  }, [data]);

  const Item = ({element}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Info', {
            item: element,
          })
        }>
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            marginBottom: 0,
            flexDirection: 'row',
            padding: 20,
            borderRadius: 5,
          }}>
          <View style={{flex: 5, marginRight: 20}}>
            <View
              style={{
                flex: 2,
                justifyContent: 'flex-end',
              }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 14,
                  fontFamily: 'TitilliumWeb-Regular',
                  lineHeight: 18,
                }}>
                {element.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      {loading && <Loading />}
      {empty && <Empty />}
      {success && (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          data={data}
          renderItem={({item, index}) => <Item element={item} key={index} />}
        />
      )}
    </Fragment>
  );
};

export default withNavigationFocus(List);
