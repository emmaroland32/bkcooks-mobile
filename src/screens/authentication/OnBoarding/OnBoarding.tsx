import {Animated, View} from 'react-native';
import {COLORS, SIZES} from '../../../../constants/theme';
import {Detail, Footer, Header} from './components';

import {AuthenticationStackParamList} from '../../../utils/types';
import {FlatList} from 'react-native-gesture-handler';
import Logo from './components/Logo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {constants} from '../../../../constants';

type OnBoardingProps = NativeStackScreenProps<
  AuthenticationStackParamList,
  'OnBoarding'
>;

const OnBoarding: React.FC<OnBoardingProps> = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef<FlatList<any> | null>(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  });

  function renderHeaderLogo() {
    return <Logo />;
  }

  function renderFooter() {
    return (
      <Footer
        currentIndex={currentIndex}
        flatListRef={flatListRef}
        navigation={navigation}
        scrollX={scrollX}
      />
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* APP Logo */}
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatListRef as any}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({item, index}) => {
          return (
            <View style={{width: SIZES.width}} key={index}>
              {/* Header Section */}
              <Header
                backgroundImage={item.backgroundImage}
                bannerImage={item.bannerImage}
                index={index}
              />
              {/* Detail Section */}
              <Detail description={item.description} title={item.title} />
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
