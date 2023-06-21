import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome')
    }, 3000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Food Service</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  title:{
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
  }
})