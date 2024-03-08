import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/home';
import Stats from '../Screens/stats';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#5E8D6B"
      inactiveColor="#4E4E4E"
      labeled={false}
      
      barStyle={{ 
        backgroundColor: '#fff',
         
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Stats" 
        component={Stats} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation