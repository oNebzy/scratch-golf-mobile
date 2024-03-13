import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'

export default function RoundsView({rounds}) {

  console.log(rounds)

  return (
    <View>
      <FlatList
        data={rounds}
        renderItem={({item}) => (
          <View style={styles.roundContainer}>
            <Text>{item.score}</Text>
          </View>
        )}
        keyExtractor={(round, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  roundContainer: {
    width: '90%',
    margin: 'auto',
    borderRadius: 2,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  score: {

  }
})