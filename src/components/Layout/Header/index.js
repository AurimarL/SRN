import * as React from 'react';

import {View, Image, StyleSheet} from 'react-native';

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
