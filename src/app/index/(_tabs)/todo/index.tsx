import { Task } from '@/components/Task'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export function Todo() {
  return (
    <View style={styles.container}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </View>
  )
}

