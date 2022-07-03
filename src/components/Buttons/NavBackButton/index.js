import * as React from 'react';

import {View, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NavBackButton() {
  const icon = <Icon size={30} name="arrow-left" solid  />;
  return <View>{icon}</View>;
}
