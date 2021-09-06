import {COLORS} from '../../constants';
import CustomDrawerContent from './components/CustomDrawerContent';
import {DrawerScreens} from '../utils';
import MainLayout from '../screens/MainLayout';
import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

interface CustomDrawerProps {}

const Drawer = createDrawerNavigator<DrawerScreens>();

const CustomDrawer: React.FC<CustomDrawerProps> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: false,
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
export default CustomDrawer;
