import {Animated, View} from 'react-native';
import {COLORS, SIZES, constants} from '../../../../../constants';

import React from 'react';

interface DotsProps {
  scrollX: Animated.Value;
}
const Dots: React.FC<DotsProps> = ({scrollX}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {constants.onboarding_screens.map((_, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate: 'clamp',
        });

        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: dotWidth,
              height: 10,
              backgroundColor: dotColor,
            }}
          />
        );
      })}
    </View>
  );
};

export default Dots;
