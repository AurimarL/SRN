import * as React from 'react';

import { Pressable, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NavBackButton() {
  const icon = <Icon size={30} name="angle-left" solid color={'#019bff'} />;
  return <Pressable onPress={()=>{Alert.alert("Recuar")}}>{icon}</Pressable>;
}
