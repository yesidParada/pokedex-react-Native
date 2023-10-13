import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabNavigator';
import DetailScreen from '../screen/DetailScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName={'Tab'}
      mode={'card'}
    >
      <Stack.Screen
        name='Tab'
        component={TabNavigator}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Details'
        component={DetailScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
)}
