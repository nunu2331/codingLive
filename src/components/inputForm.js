import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
const InputForm = ({title, inputTitle, marginVertical}) => {
  const [text, onChangeText] = useState('input password');
  return (
    <View style={{marginVertical}}>
      <Text style={[styles.titleStyle]}>{title}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    color: '#121B51',
    marginBottom: 16,
  },
  input: {
    height: 54,
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    color: '#D9D9D9',
    borderColor: '#D9D9D9',
  },
});
export default InputForm;
