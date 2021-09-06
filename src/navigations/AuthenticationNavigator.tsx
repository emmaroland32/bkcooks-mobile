import CustomDrawer from './CustomDrawer';
import React from 'react';
import authentication from '../screens/authentication';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>
      <Stack.Screen name="OnBoarding" component={authentication.OnBoarding} />
      <Stack.Screen name="SignIn" component={authentication.SignIn} />
      <Stack.Screen
        name="ForgotPassword"
        component={authentication.ForgotPassword}
      />
      <Stack.Screen name="SignUp" component={authentication.SignUp} />
      <Stack.Screen name="Otp" component={authentication.Otp} />

      <Stack.Screen name="Home" component={CustomDrawer} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
