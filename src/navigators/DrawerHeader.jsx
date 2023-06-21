import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerHeader = (props) => {
  return (
    <DrawerContentScrollView>
        <View style={styles.drawerContainer}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} 
                style={styles.profileImg} 
            />
            <Text style={styles.name}>Finley D'Souza</Text>
            <Text style={styles.email}>exampleemail@gmail.com</Text>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
    drawerContainer:{
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg:{
        height: 110,
        width: 110,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    name:{
        fontSize: 18,
        paddingTop: 10,
        fontWeight: '700',
        color: '#146C94'
    },
    email:{
        fontSize: 14,
        fontWeight: '500',
        color: '#146C94',
    },
})