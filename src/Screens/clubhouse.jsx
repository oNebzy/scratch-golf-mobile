import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Clubhouse({ session, navigation }) {

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  return (
    <View style={styles.container}>
      <Text>Clubhouse</Text>
      <Text>need: </Text>
      <Text>play round buttom</Text>
      <Text>Bag</Text>
      <Text>profile?</Text>
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
