import * as React from 'react';

import {View, Text, TextInput, Image, Button} from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
        
      <Image
        source={require('../../assets/sota.png')}
        style={{
          height: 100,
          width: 200,
          alignSelf:'center'
        }}
      />
    </View>
  );
}
