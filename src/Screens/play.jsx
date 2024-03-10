import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Play({ session, navigation }) {

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  return (
    <View style={styles.container}>
      <Text>Play</Text>
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