import React,{useState,useEffect} from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Screen01 from './components/Screen/Screen01';
import Screen02 from './components/Screen/Screen02';


export default function App() {
  const Stack= createStackNavigator();
  return (
   <GestureHandlerRootView style={{flex:1}}>
   <NavigationContainer>
   <Stack.Navigator
   screenOptions={{
          headerShown: false,
          //  headerTitleAlign: 'center',
          animation: 'slide_from_left', // Hiệu ứng chuyển cảnh
          }}
   >
       <Stack.Screen name="Screen_01" component={Screen01} />
    <Stack.Screen name="Screen_02" component={Screen02} />

    
      </Stack.Navigator>
   </NavigationContainer>
   </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
