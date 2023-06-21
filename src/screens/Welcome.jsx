import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('DrawerNav')} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})