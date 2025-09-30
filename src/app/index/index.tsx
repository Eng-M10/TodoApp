import { FloatingButton } from '@/components/FAB';
import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Done } from './(_tabs)/done';
import { Todo } from './(_tabs)/todo';
import { styles } from './styles';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { router } from 'expo-router';
const Tab = createMaterialTopTabNavigator();

const handleClick=()=>{
  alert('Floating Button Clicked')
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}><Text style={styles.title}>Tasks</Text></View>
        <TouchableOpacity>  
        <MaterialIcons size={32} name="search" color={colors.blue[800]} />
        </TouchableOpacity>
      </View>
      <View style={{flex : 1}}>
           <Tab.Navigator 
            screenOptions={{
            tabBarStyle: { backgroundColor: colors.gray[400] },
            tabBarIndicatorStyle: { backgroundColor: colors.blue[800] },
          }}
          >
           <Tab.Screen
            name="Todo" component={Todo} />
           <Tab.Screen name="Doing" component={Done} />
           <Tab.Screen name="Done" component={Done} />
          </Tab.Navigator>
      </View>

       <FloatingButton onPress={()=>{router.navigate("./add")}} />
    </SafeAreaView>
  );

}
