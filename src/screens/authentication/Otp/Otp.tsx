import {COLORS, FONTS, SIZES} from '../../../../constants';
import {Text, View} from 'react-native';

import AuthLayout from '../AuthLayout';
import {AuthenticationScreens} from '../../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {TextButton} from '../../../components';

type OtpProps = NativeStackScreenProps<AuthenticationScreens, 'Otp'>;

const Otp: React.FC<OtpProps> = ({navigation}) => {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer]);
  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication code has been sent to siyanda@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
      {/* OTP Input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        <OTPInputView
          pinCount={4}
          style={{width: '100%', height: 50}}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => console.log(code)}
        />

        {/* Countdown Timer */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            Didn't receive code?
          </Text>

          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: undefined,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {
            console.log('Continue');
          }}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            By Signing up, you agree to our
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              backgroundColor: undefined,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => console.log('TnC')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};
export default Otp;
