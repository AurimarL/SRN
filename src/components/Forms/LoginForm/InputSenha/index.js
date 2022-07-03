import * as React from 'react';

import {View, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function InputSenha() {
  const [ShowPass, setShowPass] = React.useState(false);
  const eyeOpenIcon = <Icon name="eye" size={10} />;
  const eyeCloseIcon = <Icon name="eye-slash" size={10} />;

  return (
    <>
      <TextInput
        secureTextEntry={ShowPass}
        style={{
          width: '85%',
        }}
      />
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
          {() => {
            if (ShowPass) {
              return eyeOpenIcon;
            }
            return eyeCloseIcon;
          }}
        </Pressable>
      </View>
    </>
  );
}
