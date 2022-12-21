import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import ButtonCustom from '../components/button';
import InputForm from '../components/inputForm';
import NavigationButton from '../components/navigationButton';
import TitleComponent from '../components/titleComponent';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <NavigationButton />
      <TitleComponent
        title={'Create Password'}
        description={
          'This password will unlock your Nusatech wallet only on this devices.'
        }
      />
      <InputForm title={'New Password'} marginVertical={16} />
      <InputForm title={'Confirm Password'} />
      <ButtonCustom title="Create Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 24,
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
export default HomeScreen;
