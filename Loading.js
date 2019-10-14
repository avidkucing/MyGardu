import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = ({secondary}) => {
  return (
    <View
      style={{
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!secondary ? (
        <ActivityIndicator size={90} color="silver" />
      ) : (
        <ActivityIndicator size="small" color="dodgerblue" />
      )}
    </View>
  );
};

export default Loading;
