import React from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';


export function Select({...rest}:PickerSelectProps) {

  return (
      <RNPickerSelect
        {...rest}
      />
  );
};
