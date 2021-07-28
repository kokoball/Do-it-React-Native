import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default function App() {
  const children = new Array(10)
    .fill(null)
    .map((notUsed, index) => <Text>Hello world! {index}</Text>)
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  )
}
