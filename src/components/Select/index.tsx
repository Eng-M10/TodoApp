import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

export function Select({ ...rest }: PickerSelectProps) {

  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      Icon={() => <MaterialIcons name='arrow-drop-down' size={25} color="gray" />}
      {...rest}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue', // Colored border
    borderRadius: 8, // Border radius
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#F0F0F0', // Background color for the input
  },
  inputAndroid: {
    fontSize: 14,
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: .2,
    borderColor: colors.blue[800], // Colored border
    borderRadius: 8, // Border radius
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: 'gray',
    fontSize: 16,
  },
  iconContainer: {
    top: "50%",
    marginTop: -12, // centraliza pelo tamanho do ícone
    right: 12,
  },

});
