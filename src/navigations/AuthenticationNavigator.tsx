import {AuthenticationStackParamList} from '../utils';
import React from 'react';
import authentication from '../screens/authentication';
import {createStackNavigator} from '@react-navigation/stack';

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>
      <AuthenticationStack.Screen
        name="OnBoarding"
        component={authentication.OnBoarding}
      />
      <AuthenticationStack.Screen
        name="SignIn"
        component={authentication.SignIn}
      />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={authentication.ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="SignUp"
        component={authentication.SignUp}
      />
      <AuthenticationStack.Screen name="Otp" component={authentication.Otp} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
