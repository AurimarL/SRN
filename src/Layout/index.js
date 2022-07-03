import * as React from 'react';
import {SafeAreaView} from 'react-native';
import LoginPage from '../pages/LoginPage';
import Footer from '../components/Footer';

import Header from '../components/Header';

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
