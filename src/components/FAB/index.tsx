import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';


export function FloatingButton ({...rest}:TouchableOpacityProps) {
  return (
      
      <TouchableOpacity style={styles.fab} {...rest}>
       <MaterialIcons size={24} color={colors.white} name="add" />
      </TouchableOpacity>
  );
}

