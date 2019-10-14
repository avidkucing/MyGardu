import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const Empty = ({onPress, secondary, noRetry}) => {
  return (
    <View
      style={{
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!secondary ? (
        <Fragment>
          {/* <Icon name="info-outline" size={90} color="silver" /> */}
          <Text
            style={{
              fontFamily: 'TitilliumWeb-Bold',
              fontSize: 24,
              textAlign: 'center',
              color: 'silver',
              marginTop: 10,
            }}>
            There is no data to show at the moment.
          </Text>
          <View
            style={{
              width: 100,
              marginTop: 5,
            }}>
            {/* <ButtonPrimary text="Retry" onPress={onPress} /> */}
          </View>
        </Fragment>
      ) : (
        <Fragment>
          <Text
            style={{
              fontFamily: 'TitilliumWeb-Regular',
              fontSize: 14,
              textAlign: 'center',
              color: 'silver',
              marginTop: 10,
            }}>
            There is no data to show at the moment.
          </Text>
          {!noRetry && (
            <View
              style={{
                width: 100,
                marginTop: 5,
              }}>
              {/* <ButtonSecondary text="Retry" onPress={onPress} /> */}
            </View>
          )}
        </Fragment>
      )}
    </View>
  );
};

export default Empty;
