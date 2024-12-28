import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomHeader = ({ title, isBackButton }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View>
                <Text style={styles.title}>{title}</Text>
                {isBackButton && (
                    <TouchableOpacity style={styles.backBtn} onPress={ ()=> router.back()}>
                        <Ionicons name="chevron-back-circle" size={32} color="#fff" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0090B0',
        padding: 15,
    },
    title: {
        fontSize: 22,
        fontFamily: 'SegoeSemiBold',
        textAlign: 'center',
        color: '#fff'
    },
    backBtn: {
        position: 'absolute',
        top: 5
    }
})