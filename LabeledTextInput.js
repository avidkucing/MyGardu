import React, {Fragment} from 'react';
import {TextInput, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const LabeledTextInput = ({
  value,
  setValue,
  icon,
  iconType,
  label,
  placeholder,
  invalid,
  password,
}) => {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name={icon} type={iconType} size={16} color="dodgerblue" />
        <Text
          style={{
            fontFamily: 'TitilliumWeb-Regular',
            marginLeft: 5,
            color: 'dodgerblue',
          }}>
          {label}
        </Text>
      </View>
      <TextInput
        value={value}
        secureTextEntry={password}
        onChangeText={text => setValue(text)}
        placeholder={placeholder ? placeholder : label}
        style={{
          height: 40,
          borderColor: invalid ? 'crimson' : 'silver',
          borderBottomWidth: 1,
        }}
      />
      {invalid && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Icon name="info" size={12} color="crimson" />
          <Text
            style={{
              fontFamily: 'TitilliumWeb-Regular',
              fontSize: 12,
              color: 'crimson',
              marginLeft: 5,
            }}>
            {label} tidak boleh kosong.
          </Text>
        </View>
      )}
    </Fragment>
  );
};

export default LabeledTextInput;
