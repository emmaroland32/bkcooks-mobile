import AuthenticationNavigator from './AuthenticationNavigator';
import CustomDrawer from './CustomDrawer';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AllAppNavigator = createStackNavigator();



interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <AllAppNavigator.Navigator
      initialRouteName="authentication"
      screenOptions={{
        headerShown: false,
      }}>
      <AllAppNavigator.Screen
        name="authentication"
        children={AuthenticationNavigator}
      />
      <AllAppNavigator.Screen name="drawer" children={CustomDrawer} />
    </AllAppNavigator.Navigator>
  );
};

export default index;
