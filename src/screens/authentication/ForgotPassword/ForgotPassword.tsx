import {AuthenticationScreens, utils} from '../../../utils';
import {COLORS, SIZES, icons} from '../../../../constants';
import {FormInput, TextButton} from '../../../components';
import {Image, View} from 'react-native';

import AuthLayout from '../AuthLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

type ForgotPasswordProps = NativeStackScreenProps<
  AuthenticationScreens,
  'ForgotPassword'
>;

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  function isEnableSendEmail() {
    return email != '' && emailError == '';
  }
  return (
    <AuthLayout
      title="Password Recovery"
      subTitle="Please enter your email address to recover your password"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
      {/* Form Input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>

      {/* Button */}
      <TextButton
        label="Send Email"
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        onPress={() => navigation.goBack()}
        disabled={isEnableSendEmail() ? false : true}
      />
    </AuthLayout>
  );
};
export default ForgotPassword;
