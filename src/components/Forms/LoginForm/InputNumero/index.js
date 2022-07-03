import * as React from 'react';

import {View, TextInput} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

export default function InputNumero() {
  const [CountryCode, setCountryCode] = React.useState('AO');

  return (
    <>
      <View style={{alignSelf: 'center'}}>
        <CountryPicker
          countryCode={CountryCode}
          onSelect={country => {
            setCountryCode(country.cca2);
          }}
        />
      </View>
      <View
        style={{
          width: '85%',
        }}>
        <TextInput
          placeholder="921 234 567"
          allowFontScaling
          keyboardType="number-pad"
          maxLength={9}></TextInput>
      </View>
    </>
  );
}
