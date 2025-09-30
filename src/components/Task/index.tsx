import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Task = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbutton}>

            </TouchableOpacity>
            <View style={styles.detailsbox}>
                <Text style={styles.tasktitle}>Title Task</Text>
                <Text>Description Task</Text>
            </View>
        </View>
    );
}
