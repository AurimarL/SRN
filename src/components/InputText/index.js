import * as React from 'react';
import {TextInput} from 'react-native';

export default function InputText(props) {
  return (
    <TextInput
      secureTextEntry={props.SecureTextEntry}
      placeholder={props.PlaceHolder}
      allowFontScalin={props.AllowFontScalin}
      maxLength={props.MaxLenght}
      keyboardType={props.KeyboardType}
    />
  );
}
