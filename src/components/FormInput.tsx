import {COLORS, FONTS, SIZES} from '../../constants';
import React, {ReactElement} from 'react';
import {Text, TextInput, TextInputProps, View, ViewProps} from 'react-native';

interface FormInputProps {
  containerStyle?: ViewProps['style'];
  label?: string;
  placeholder?: TextInputProps['placeholder'];
  inputStyle?: TextInputProps['style'];
  prependComponent?: ReactElement;
  appendComponent?: ReactElement;
  secureTextEntry?: TextInputProps['secureTextEntry'];
  keyboardType?: TextInputProps['keyboardType'];
  autoCompleteType?: TextInputProps['autoCompleteType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  errorMsg?: string;
  onChange: (text: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  appendComponent,
  containerStyle,
  errorMsg,
  inputStyle,
  label,
  onChange,
  placeholder,
  prependComponent,
  secureTextEntry,
}) => {
  return (
    <View style={containerStyle}>
      {/* Label & Error Messgae */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {prependComponent}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          onChangeText={(text: string) => onChange(text)}
          style={[{flex: 1}, inputStyle]}
        />
        {appendComponent}
      </View>
    </View>
  );
};
export default FormInput;
