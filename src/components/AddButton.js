import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from 'expo-router';

const AddButton = () => {
  return (
    <TouchableOpacity 
        style={styles.container} 
        onPress={()=> router.navigate('/addtodo')}
        >
      <FontAwesome5 name="plus" size={22} color="white" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#0090B0',
        padding: 15,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 10,
        shadowOffset: { width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.7
    }
})