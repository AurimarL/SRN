import * as React from 'react';

import {View, Text, TextInput, Image, Button} from 'react-native';

import NavBackButton from '../../Buttons/NavBackButton';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <NavBackButton />
      <Image
        source={require('../../../assets/sota.png')}
        style={{
          height: 110,
          width: 200,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

