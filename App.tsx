import AppNavigators from './src/navigations';
import {LoadAssets} from './src/components';
import React from 'react';
import fonts from './constants/fonts';

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AppNavigators />
    </LoadAssets>
  );
}
