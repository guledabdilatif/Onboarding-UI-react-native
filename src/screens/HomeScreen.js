import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{alignItems:'center', justifyContent:'center', display:'flex', margin:'auto', height:'100vh'}}>
        <Text
        style={{marginTop:90, fontWeight:'bold', padding:20, backgroundColor:'black', color:'white'}}>HomeScreen</Text>
        
    </SafeAreaView>
  )
}

export default HomeScreen