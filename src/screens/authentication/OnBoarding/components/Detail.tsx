import {FONTS, SIZES} from '../../../../../constants';
import {Text, View} from 'react-native';

import React from 'react';

interface DetailProps {
  description: string;
  title: string;
}

const Detail: React.FC<DetailProps> = ({description, title}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.radius,
      }}>
      <Text style={{...FONTS.h1, fontSize: 25}}>{title}</Text>
      <Text
        style={{
          marginTop: SIZES.radius,
          textAlign: 'center',
          paddingHorizontal: SIZES.padding,
          ...FONTS.body3,
        }}>
        {description}
      </Text>
    </View>
  );
};
export default Detail;
