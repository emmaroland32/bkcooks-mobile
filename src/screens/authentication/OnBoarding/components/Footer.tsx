import {COLORS, SIZES, constants} from '../../../../../constants';

import {Animated} from 'react-native';
import Dots from './Dots';
import {FlatList} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../../../../utils/types';
import React from 'react';
import {TextButton} from '../../../../components';
import {View} from 'react-native';

interface FooterProps {
  scrollX: Animated.Value;
  currentIndex: number;
  flatListRef: React.MutableRefObject<FlatList<any> | null>;
  navigation: NativeStackNavigationProp<OnBoardingStackParamList, 'OnBoarding'>;
}

const Footer: React.FC<FooterProps> = ({
  scrollX,
  currentIndex,
  navigation,
  flatListRef,
}) => {
  return (
    <View style={{height: 160}}>
      {/* Pagination / Dots */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Dots scrollX={scrollX} />
      </View>

      {/* Buttons */}
      {currentIndex < constants.onboarding_screens.length - 1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}>
          <TextButton
            label="Skip"
            labelStyle={{
              color: COLORS.darkGray2,
            }}
            buttonContainerStyle={{backgroundColor: undefined}}
            onPress={() => navigation.navigate('SignIn')}
          />
          <TextButton
            label="Next"
            buttonContainerStyle={{
              height: 60,
              width: 200,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}
          />
        </View>
      )}
      {currentIndex == constants.onboarding_screens.length - 1 && (
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}>
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{
              height: 60,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      )}
    </View>
  );
};
export default Footer;
