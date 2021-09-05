import {COLORS, FONTS} from '../../constants';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import React from 'react';

interface TextIconButtonProps {
  containerStyle?: TouchableOpacityProps['style'];
  label?: string;
  labelStyle?: TextProps['style'];
  icon: ImageProps['source'];
  iconPosition?: 'RIGHT' | 'LEFT';
  iconStyle?: ImageProps['style'];
  onPress?: () => void;
}

const TextIconButton: React.FC<TextIconButtonProps> = ({
  containerStyle,
  icon,

  iconPosition,
  iconStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      {iconPosition == 'LEFT' && (
        <Image source={icon} style={[styles.image, iconStyle]} />
      )}
      <Text style={[{...FONTS.body3}, labelStyle]}>{label}</Text>

      {iconPosition == 'RIGHT' && (
        <Image source={icon} style={[styles.image, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});
export default TextIconButton;
