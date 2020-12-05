import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/screens/Home';
import Splash from './src/screens/Splash';

const AppNavigator = createStackNavigator({
  Home:{
    screen: Home,
  }
})

// A user cannot go back to splash screen on pressing back button 
// using below code
const AppSwitchNavigator = createSwitchNavigator({
  Splash: {screen: Splash},
  AppNavigator: {screen: AppNavigator},
})

const App = createAppContainer(AppSwitchNavigator);

export default App;
