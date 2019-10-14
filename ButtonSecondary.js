import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';

const ButtonSecondary = ({navigation, text, onPress, loading, disabled}) => {
  return disabled ? (
    <View
      style={{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'silver',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'silver',
          fontFamily: 'TitilliumWeb-Regular',
        }}>
        {text}
      </Text>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      {loading ? (
        <View
          style={{
            margin: 10,
          }}>
          <ActivityIndicator size="small" color="dodgerblue" />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: 'white',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'dodgerblue',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'dodgerblue',
              fontFamily: 'TitilliumWeb-Regular',
            }}>
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default withNavigation(ButtonSecondary);
