import * as React from 'react';
import {View, TextInput} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import InputText from '../../../InputText';

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
        <InputText
          MaxLenght={9}
          AllowFontScalin={true}
          PlaceHolder={'921 234 567'}
          KeyboardType={'number-pad'}
        />
      </View>
    </>
  );
}
