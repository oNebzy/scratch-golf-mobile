import { View, Text } from 'react-native'
import React from 'react'
import Clubhouse from '../Screens/clubhouse';
import Stats from '../Screens/stats';
import Play from '../Screens/play';
import Settings from '../Screens/settings';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const TabNavigation = ({session}) => {

  return (
    <Tab.Navigator
      initialRouteName="Clubhouse"
      activeColor="#5E8D6B"
      inactiveColor="#4E4E4E"
      labeled={false}
      
      barStyle={{ 
        backgroundColor: '#fff',
         
      }}
    >
      <Tab.Screen 
        name="Clubhouse" 
        children={() => <Clubhouse session={session}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Stats" 
        component={Stats}
        
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={32} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Play" 
        component={Play} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="golf-tee" color={color} size={32} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-cog-outline" color={color} size={32} />
          ),
        }} 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation