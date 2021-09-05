import {COLORS, FONTS} from '../../constants';
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import React from 'react';

interface TextButtonProps {
  label: string;
  disabled?: TouchableOpacityProps['disabled'];
  buttonContainerStyle?: TouchableOpacityProps['style'];

  labelStyle?: TextProps['style'];
  onPress?: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({
  label,
  buttonContainerStyle,
  labelStyle,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
        },
        buttonContainerStyle,
      ]}>
      <Text
        style={[
          {
            color: COLORS.white,
            ...FONTS.h3,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default TextButton;
