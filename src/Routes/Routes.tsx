import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/Login/index"
import { Home } from "../screens/Home/Home"

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
   LoginScreen: undefined
    Home: undefined
 }

 const StackNavigator = () => {
    return (
       <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} options={{animation: 'slide_from_right'}} />
       </Stack.Navigator>
    )
 }

 export function Routes() {
    return (
       <NavigationContainer>
          <StackNavigator />
       </NavigationContainer>
    )
 }