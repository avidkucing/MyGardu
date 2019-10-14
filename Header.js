import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';

const Header = ({
  navigation,
  title,
  drawer,
  search,
  textSearch,
  link,
  onChangeText,
  nearby,
  noIcon,
}) => {
  const [data, setData] = useState();

  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}>
      <View style={{height: 5, flexDirection: 'row'}}>
        <View style={{flex: 2, backgroundColor: 'gold'}} />
        <View style={{flex: 1, backgroundColor: 'crimson'}} />
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#1E90FF', '#4169E1']}
        style={
          {
            // height: 200
            // flexDirection: "row"
            // backgroundColor: "royalblue"
          }
        }>
        <View
          style={{
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {noIcon ? (
            <View
              style={{
                width: 20,
              }}
            />
          ) : (
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={
                drawer
                  ? () => navigation.navigate('Home')
                  : () => navigation.goBack()
              }>
              <Icon
                // name={drawer ? "menu" : "arrow-back"}
                name={'arrow-back'}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          )}
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'white',
                fontFamily: 'TitilliumWeb-Regular',
              }}>
              {title}
            </Text>
          </View>
        </View>
        {search && (
          <View
            style={{
              height: 50,
              padding: 10,
              paddingTop: 0,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: '100%',
                borderRadius: 5,
                backgroundColor: 'white',
              }}
              placeholder="Search"
              value={textSearch}
              onChangeText={onChangeText}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default withNavigation(Header);
