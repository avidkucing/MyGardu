import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const LabeledText = ({icon, iconType, label, text, content}) => {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Icon name={icon} size={14} type={iconType} color="dodgerblue" />
        <Text
          style={{
            marginLeft: 5,
            fontFamily: 'TitilliumWeb-Regular',
            fontSize: 14,
            color: 'dodgerblue',
          }}>
          {label}
        </Text>
      </View>
      {text && (
        <Text
          style={{
            fontFamily: 'TitilliumWeb-Regular',
          }}>
          {text}
        </Text>
      )}
      {content}
    </Fragment>
  );
};

export default LabeledText;
