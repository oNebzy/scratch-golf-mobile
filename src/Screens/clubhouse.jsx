import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { supabase } from '../Supabase/supabase'
import { useTheme } from 'react-native-paper'

export default function Clubhouse({ session, navigation }) {
  
  const [loading, setLoading] = useState(true)

  // Profile States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [handicapIndex, setHandicapIndex] = useState('')
  

  useEffect(() => {
    if (session) {
      getProfile()
    }
  }, [session])

  async function getProfile() {
    try {
      // set loading to true
      setLoading(true)
      
      //if no session.user /* SHOULD NEVER SEE THIS */
      if (!session?.user) throw new Error('No user on the session!')

      // Get data from supabase
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name, handicap_index`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setHandicapIndex(data.handicap_index)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePicture}></View>
        <View style={styles.profileRightColumn}>
          <Text>{firstName} {lastName}</Text>
          <Text>{handicapIndex} hcp</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>Rounds</Text>
        <View style={styles.roundCountsContainer}>
          <View style={styles.roundCount}>
          <Text>27</Text>
          <Text>total</Text>
          </View>
          <View style={styles.roundCount}>
          <Text>89.7</Text>
          <Text>avg</Text>
          </View>
          
          
        </View>
        
      </View>
      <Text>Bag</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#5E8D6B',
  },
  header: {
    width: '100%',
    backgroundColor: '#5E8D6B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '15%',
    marginBottom: '4%',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 75,
    backgroundColor: 'grey'
  },
  profileRightColumn: {

  },
  roundCountsContainer: {
    flexDirection: 'row'
  }
});
