import {COLORS, FONTS, SIZES, images} from '../../../constants';
import {Image, Text, TextProps, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';

interface AuthLayoutProps {
  title?: string;
  subTitle?: string;
  titleContainerStyle?: TextProps['style'];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  subTitle,
  title,
  titleContainerStyle,
  children,
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* App Icon */}
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{
              height: 100,
              width: 200,
            }}
          />
        </View>

        {/* Title & Subtitle */}
        <View
          style={[
            {
              marginTop: SIZES.padding,
            },
            titleContainerStyle,
          ]}>
          {/* Title */}
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h2,
            }}>
            {title}
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}>
            {subTitle}
          </Text>
        </View>

        {/* Content & Children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};
export default AuthLayout;
