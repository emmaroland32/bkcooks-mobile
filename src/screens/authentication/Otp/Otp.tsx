import {Text, View} from 'react-native';

import AuthLayout from '../AuthLayout';
import {AuthenticationStackParamList} from '../../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SIZES} from '../../../../constants';

type OtpProps = NativeStackScreenProps<AuthenticationStackParamList, 'Otp'>;

const Otp: React.FC<OtpProps> = ({navigation}) => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication code has been sent to siyanda@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}></AuthLayout>
  );
};
export default Otp;
