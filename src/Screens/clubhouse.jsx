import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { supabase } from '../Supabase/supabase'

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
      <Text>Clubhouse</Text>
      <Text>need: </Text>
      <Text>{firstName} {lastName}</Text>
      <Text>{handicapIndex}</Text>
      <Text>Bag</Text>
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
