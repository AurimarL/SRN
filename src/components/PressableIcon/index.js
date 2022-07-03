import * as React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PressableIcon(props) {
  return (
    <Icon
      size={props.Size}
      name={props.IconName}
      solid
      color={'#019bff'}
      onPress={props.Function}
    />
  );
}
