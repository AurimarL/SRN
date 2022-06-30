import * as React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';

export default function Footer() {
  return (
    <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
      <Pressable
        onPress={() => {
          Alert.alert('Feels');
        }}>
        <Text>Forgot Password</Text>
      </Pressable>
    </View>
  );
}
