import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'

export default function RoundsView({rounds}) {

  console.log('Rounds Container')
  console.log(rounds)

  function CheckScore({score, par}){

    const result = score-par;
    let resultText;
    if (result > 0){
      resultText = <Text style={{color: 'red'}}>+{result}</Text>
    }
    else if (result < 0){
      resultText = <Text style={{color: 'green'}}>-{result}</Text>
    } 
    else {
      resultText = <Text style={{color: 'grey'}}>E</Text>
    }

    return (
      <View>{resultText}</View>
    )
  }

  return (
    <View>
      <FlatList
        data={rounds}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <View style={styles.scoreContainer}>
              <View style={styles.roundContainer}>
                <Text style={styles.scoreText}>{item.score}</Text>
                <CheckScore score={item.score} par={item.par}/>
              </View>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text>GIR</Text>
                  <Text>38%</Text>
                </View>
                <View style={styles.stat}>
                  <Text>FIR</Text>
                  <Text>53%</Text>
                </View>
                <View style={styles.stat}>
                  <Text>PUTTS</Text>
                  <Text>40</Text>
                </View>
              </View>
            </View>
            <View style={styles.roundInfoContainer}>
              <Text>Round date</Text>
              <Text>Course Name</Text>
              <Text>hmm</Text>
            </View>
          </View>
        )}
        keyExtractor={(round, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    margin: 'auto',
    borderRadius: 8,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
    padding: 10,
    marginVertical: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  roundContainer: {
    flexDirection: 'row',
  }, 
  statsContainer: {
    flexDirection: 'row',
  },
  stat: {
    textAlign: 'left',
    marginLeft: '10%',
  },
  scoreText: {
    fontSize: 20,
  }
})