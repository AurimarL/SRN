import * as React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';

import InputNumero from './InputNumero';
import InputSenha from './InputSenha';

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
        <Pressable style={styles.LoginButtonPressable}>
          <Text style={styles.IniciarSessaoTxt}>iniciar sessao</Text>
        </Pressable>
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
  IniciarSessaoTxt: {
    fontFamily: 'MontSerrat',
    color: '#fafafa',
    fontSize: 20,
  },
  Input: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#019bff',
  },
});
