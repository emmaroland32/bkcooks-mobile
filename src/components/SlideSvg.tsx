import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SlideSVGProps {
  uri: string;
  width?: string | number;
  height?: string | number;
}

const SlideSVG: React.FC<SlideSVGProps> = ({height, uri, width}) => {
  return (
    <SvgXml
      xml={uri}
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
      }}
    />
  );
};
export default SlideSVG;
