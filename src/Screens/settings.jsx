import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <Text>name</Text>
      <Text>email</Text>
      <Text>birthday / age</Text>
      <Text>logout</Text>
      <Text>dark mode toggle</Text>
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
