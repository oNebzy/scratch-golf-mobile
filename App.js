import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './src/Supabase/supabase';
import Auth from './src/Auth/auth';
import TabNavigation from './src/Navigation/navigation';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

// Wrappers
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,

  // Specify a custom property
  

  // Specify a custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#5E8D6B',
    secondary: '#D9D9D9',
    tertiary: '#4E4E4E',
    secondaryContainer: 'transparent',
  },
};


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ session }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {session && session.user ? <TabNavigation session={session} /> : <Auth/>}
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
