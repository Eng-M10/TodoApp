import { Select } from '@/components/Select';
import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type Props = {
  event: Event;
  selectedDate: Date;

}


export default function Add() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = useState(null)

  const onChange = ({ event, selectedDate }: Props) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
      return;
    }

    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };


  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { router.back() }}>
          <MaterialIcons name='close' size={28} color={"#000"} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New Task</Text>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput style={styles.input} placeholder='Title' />

        <Text style={styles.label}>Descriptions</Text>

        <TextInput
          style={styles.textarea}
          numberOfLines={4}
          maxLength={120}
          placeholder={'Describe the new task here...'}
          textAlignVertical="top"
          underlineColorAndroid={'transparent'}
        />
        <Text style={[styles.label, {
          textAlign: "right",
          opacity: .3,
          marginTop:
            -45,
          marginRight: 8
        }]}
        >
          0/21
        </Text>

        <Text style={styles.label}>Due Date</Text>
        <TouchableOpacity onPress={showDatepicker} >
          <View style={styles.dateTextContainer} >
            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
            <MaterialIcons name="edit-calendar" size={24} color={colors.blue[800]} />
          </View>

          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={(event, date) => onChange}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.label}>Priority</Text>

        <Select
          onValueChange={
            setSelected}
          items={[
            { label: 'Low', value: 3 },
            { label: 'Medium', value: 2 },
            { label: 'High', value: 1 }
          ]
          }
        />
        <TouchableOpacity style={styles.button} onPress={() => { console.log("clicou") }}>
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}