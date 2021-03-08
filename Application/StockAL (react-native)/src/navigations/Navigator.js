import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Auth from '../screens/Auth';
import OnBoardingScreen from '../screens/OnBoardingScreen';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      initialRouteName="OnBoardingScreen" 
      screenOptions={{ headerShown : false }}>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="OnBoardingScreen" component={ OnBoardingScreen } />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppNavigator;
