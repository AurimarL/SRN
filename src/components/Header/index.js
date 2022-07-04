import * as React from 'react';

import {View, Image, StyleSheet, Alert} from 'react-native';

import PressableIcon from '../PressableIcon';

export default function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <PressableIcon
        Size={30}
        IconName="angle-left"
        Function={() => {
          navigation.navigate('Home');
        }}
      />
      <Image
        source={require('../../assets/sota.png')}
        style={styles.SotaLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SotaLogo: {
    height: 110,
    width: 200,
    alignSelf: 'center',
  },
});
