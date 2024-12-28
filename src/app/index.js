import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { screenH, screenW } from '../utils/Constants'
import { resetAndNevigate } from '../utils/Helpers'

const Main = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SegoeRegular: require('../assets/fonts/segoeregular.ttf'),
    SegoeSemiBold: require('../assets/fonts/segoesemibold.ttf'),
    SegoeBold: require('../assets/fonts/segoebold.ttf'),
  })

  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect(()=> {
    if(loaded && !hasNavigated) {
      const timeOutId = setTimeout(() => {
        resetAndNevigate('/home')
      }, 1000);

      return () => clearTimeout(timeOutId);
    }
  }, [loaded, hasNavigated])

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/todo.png")} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: screenW * 0.3,
    height:  screenH * 0.12
  }
})

export default Main