
//rnf comando agregar plantilla
import "@/global.css"
import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from "expo-router";

export default function _Layout() {
  return (
    <View className="flex-1 justify-center">
        <Slot />
    </View>
  )
}

