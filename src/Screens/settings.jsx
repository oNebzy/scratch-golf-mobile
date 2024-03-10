import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { supabase } from '../Supabase/supabase';

export default function Settings() {

  async function signOut() {
    console.log('test')
    // sign out from the current session only
    await supabase.auth.signOut({ scope: 'local' })
  }

  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <Text>name</Text>
      <Text>email</Text>
      <Text>birthday / age</Text>
      <Text>logout</Text>
      <Text>dark mode toggle</Text>
      <Button mode="outlined" onPress={signOut}>Sign Out</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
