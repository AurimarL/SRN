import * as React from 'react';

import {View, Text, TextInput, Pressable, Button} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

export default function LoginForm() {
  const [ShowPass, setShowPass] = React.useState(false);
  const [CountryCode, setCountryCode] = React.useState('AO');
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#019bff',
        }}>
        <View style={{alignSelf: 'center'}}>
          <CountryPicker
            countryCode={CountryCode}
            onSelect={country => {
              setCountryCode(country.cca2);
            }}
          />
        </View>
        <TextInput placeholder="942136287" allowFontScaling></TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#019bff',
        }}>
        <TextInput secureTextEntry={ShowPass}></TextInput>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            right: 0,
          }}>
          <Pressable
            onPress={() => {
              setShowPass(!ShowPass);
            }}>
            <Text>Show</Text>
          </Pressable>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Pressable
          style={{
            backgroundColor: '#019bff',
            alignSelf: 'center',
            padding: 5,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: 'MontSerrat',
              color: '#fafafa',
              fontSize: 20,
            }}>
            iniciar sessao
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
