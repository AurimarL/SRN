import * as React from 'react';

import {Text, Pressable, StyleSheet} from 'react-native';

export default function PressableButton(props) {
  return (
    <Pressable style={styles.LoginButtonPressable}>
      <Text style={styles.Texto}>{props.Texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  LoginButtonPressable: {
    backgroundColor: '#019bff',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 10,
  },

  Texto: {
    fontFamily: 'MontSerrat',
    color: '#fafafa',
    fontSize: 20,
  },
});
