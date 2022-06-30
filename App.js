import * as React from 'react';

import {View, Text, TextInput, Image, Button, Pressable} from 'react-native';

import Header from './components/Header';

import LoginForm from './components/LoginForm';

import Footer from './components/Footer';
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
      }}>
      <Header />
      <LoginForm />
      <Footer />
    </View>
  );
}
