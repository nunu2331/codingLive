import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const TitleComponent = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 20,
    marginBottom: 16,
  },
});
export default TitleComponent;
