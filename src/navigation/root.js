import React from 'react';
import HomeScreen from '../screen/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screen/settings';
import axios from 'axios';

const Stack = createNativeStackNavigator();

const FetchAPI = params => {
  axios
    .get('https://reqres.in/api/users?page=2')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Navigations = params => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
export default Navigations;
