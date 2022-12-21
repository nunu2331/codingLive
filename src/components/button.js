import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ButtonCustom = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#0A5BE0',
  },
  titleStyle: {
    color: 'white',
    fontFamily: 'Poppins',
  },
});

export default ButtonCustom;
