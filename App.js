import React from 'react';
import { StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
//import 'react-native-gesture-handler'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#63C2D1' barStyle='light-content'> </StatusBar>
      <Routes/>
    </NavigationContainer>
  );
}


