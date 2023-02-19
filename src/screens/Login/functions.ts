import React, { useState } from "react"

import { ToastAndroid } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../Routes/Routes"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { logIn } from "../../services/AuthService"

interface FunctionsLoginProps {
   carregando: boolean
   setCarregando: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthScreenProp = NativeStackNavigationProp<RootStackParamList, "LoginScreen">

export const FunctionsLogin = ({ carregando, setCarregando }: FunctionsLoginProps) => {
   const navigation = useNavigation<AuthScreenProp>()
   const [usuarioAutenticado, setUsuarioAutenticado] = useState<boolean>(false)

   function showToastie(error: any) {
      error.status === 404 && ToastAndroid.showWithGravity("Usuário ou senha inválido", 6000, ToastAndroid.TOP)
   }

   async function fazerLogin(username: string, password: string) {
      setCarregando(true)

      try {
         let res = await logIn(username, password)
         setUsuarioAutenticado(true);
         AsyncStorage.setItem("@user", JSON.stringify(res.data));

         navigation.navigate("Home");
      } catch (error) {
         console.log(error)
         showToastie(error)
      } finally {
         setCarregando(false)
        } 
   }

   return {
      fazerLogin,
   }
}
