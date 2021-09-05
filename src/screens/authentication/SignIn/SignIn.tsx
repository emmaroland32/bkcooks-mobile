import {COLORS, FONTS, SIZES, icons} from '../../../../constants';
import {
  CustomSwitch,
  FormInput,
  TextButton,
  TextIconButton,
} from '../../../components';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import AuthLayout from '../AuthLayout';
import {AuthenticationStackParamList} from '../../../utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {utils} from '../../../utils';

type SignInScreenProps = NativeStackScreenProps<
  AuthenticationStackParamList,
  'SignIn'
>;
const SignIn: React.FC<SignInScreenProps> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }
  return (
    <AuthLayout
      title="Let's Sign You In"
      subTitle="Welcome back, you've been missed">
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        {/* Form Inputs */}
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
        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />
        {/* Save me and Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{
              backgroundColor: undefined,
            }}
            labelStyle={{color: COLORS.gray, ...FONTS.body4}}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
        {/* Sign In */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',

            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
        />
        {/* Sign Up */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{backgroundColor: undefined, marginLeft: 3}}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>

      {/* Footer Section */}

      <View>
        {/* Facebook */}

        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="continue with facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => console.log('FB')}
        />

        {/* Google */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: undefined,
          }}
          label="continue with Google"
          labelStyle={{
            marginLeft: SIZES.radius,
          }}
          onPress={() => console.log('Google')}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
