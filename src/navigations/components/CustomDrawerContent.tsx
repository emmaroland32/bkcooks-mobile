import {COLORS, SIZES, icons} from '../../../constants';
import {Image, TouchableOpacity, View} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';

interface CustomDrawerContentProps {
  navigation: DrawerNavigationHelpers;
}
const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
      }}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* Close Button */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                width: 35,
                height: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile')}></TouchableOpacity>

        {/* Drawer Items */}
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
