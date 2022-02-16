import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '~/Screens/Navigator';

interface Props {}

const App = ({}: Props) => {
  useEffect(() =>{
    SplashScreen.hide();
  },[]);
  
  return (
    <>
      <StatusBar barStyle = "light-content"/>
      <Navigator/>
    </>
  );
};

export default App;