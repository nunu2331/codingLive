import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import BackButton from '../assets/backbutton.png';
const NavigationButton = params => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={BackButton}
        style={styles.imageWrapper}
        resizeMode="contain"
      />
      <Text style={styles.titleStyle}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  imageWrapper: {
    width: 7,
    height: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 4,
  },
  titleStyle: {
    color: '#121B51',
    fontFamily: 'Poppins',
  },
});

export default NavigationButton;
