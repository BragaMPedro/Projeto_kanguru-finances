import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login/Login"
import { Home } from "../screens/Home/Home"

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
    Login: undefined
    Home: undefined
 }

 const StackNavigator = () => {
    return (
       <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
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