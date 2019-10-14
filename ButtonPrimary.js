import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

const ButtonPrimary = ({
  navigation,
  icon,
  text,
  onPress,
  loading,
  disabled,
}) => {
  return disabled ? (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'silver',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'grey',
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
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#1E90FF', '#4169E1']}
          style={{
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // margin: 10,
            borderRadius: 10,
          }}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color="white"
              containerStyle={{
                marginBottom: -2,
              }}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontFamily: 'TitilliumWeb-Regular',
              marginLeft: 7,
            }}>
            {text}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default withNavigation(ButtonPrimary);
