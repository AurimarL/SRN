import * as React from 'react';
import {View} from 'react-native';

import LoginForm from '../../components/Forms/LoginForm';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginPage({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,

        margin: 10,
      }}>
      <Header navigation={navigation} />

      <LoginForm />
      <Footer />
    </SafeAreaView>
  );
}
