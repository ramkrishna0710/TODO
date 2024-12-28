import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

const Layout = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <StatusBar style="light" backgroundColor="#0090B0" translucent={false} />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='index'
                />
                <Stack.Screen
                    name='home'
                />
                <Stack.Screen
                    name='addtodo'
                />
            </Stack>
        </PersistGate>
    </Provider>
  )
}

export default Layout