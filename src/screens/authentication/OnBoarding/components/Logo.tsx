import {Image, View} from 'react-native';
import {SIZES, images} from '../../../../../constants';

import React from 'react';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: SIZES.height > 800 ? 50 : 25,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={images.logo_02}
        resizeMode="contain"
        style={{
          width: SIZES.width * 0.5,
          height: 100,
        }}
      />
    </View>
  );
};
export default Logo;
