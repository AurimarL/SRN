import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import LoginPage from '../../pages/LoginPage';
import Footer from './Footer';

import Header from './Header';

export default function Layout({Children}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 10,
      }}>
      <Header />

      <LoginPage />

      <Footer />
    </SafeAreaView>
  );
}
