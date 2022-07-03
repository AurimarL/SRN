import * as React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';

import InputNumero from './InputNumero';
import InputSenha from './InputSenha';

import InputText from '../../InputText';
import PressableButton from '../../Buttons/PressableButton';

export default function LoginForm() {
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: 30,
      }}>
      <View style={styles.Input}>
        <InputNumero />
      </View>

      <View style={styles.Input}>
        <InputSenha />
      </View>

      <View style={{marginTop: 20}}>
        <PressableButton Texto="Iniciar Sessao" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginButtonPressable: {
    backgroundColor: '#019bff',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 10,
  },
  Input: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#019bff',
  },
});
