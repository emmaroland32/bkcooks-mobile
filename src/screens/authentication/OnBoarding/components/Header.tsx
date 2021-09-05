import {Image, ImageBackground, ImageSourcePropType, View} from 'react-native';

import React from 'react';

interface HeaderProps {
  bannerImage: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  index: number;
}

const Header: React.FC<HeaderProps> = ({
  backgroundImage,
  bannerImage,
  index,
}) => {
  return (
    <View style={{flex: 3}}>
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          height: index == 1 ? '88%' : '100%',
        }}>
        <Image source={bannerImage} />
      </ImageBackground>
    </View>
  );
};
export default Header;
