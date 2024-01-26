import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, Link } from 'expo-router'

const DayDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title:"On Boarding Screen"}} />
      <Text>Day Detail Screen 2</Text>
      <Link 
      href={'/day2/onboarding'} asChild>
      <Button title="Go To Onboarding"/>
      </Link>
    </View>
  )
}

export default DayDetailScreen