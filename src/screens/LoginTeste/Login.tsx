import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { useState, useEffect, useRef } from "react"

import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"

import Kanguru from "../../assets/logo/pngwing.com.png"
import { RootStackParamList } from "../../Routes/Routes"
import { Home } from "../Home/Home"
import { biometriaProps, FunctionsAutenticarUsuario } from "./functions"
import { styles } from "./styles"

type AuthScreenProp = NativeStackNavigationProp<RootStackParamList, "LoginScreen">

export const Login = () => {
   const [biometria, setBiometria] = useState<biometriaProps | undefined>()
   const navigation = useNavigation<AuthScreenProp>()

   const { usuarioAutenticado, setUsuarioAutenticado, checarBiometria, autenticarUsuario } = FunctionsAutenticarUsuario(
      biometria,
      setBiometria
   )

   useEffect(() => {
      checarBiometria()
   }, [])

   useEffect(() => {
      navigation.addListener("transitionEnd", e => {
         usuarioAutenticado && setUsuarioAutenticado(false)
      })
   }, [navigation])

   return (
      <>
         <View style={styles.container}>
            {usuarioAutenticado && (
               <Text style={{ color: "#fff", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
                  Ihbuuuu, funcionou caraaaaai
               </Text>
            )}
            <ImageBackground style={styles.logoContainer}>
               <Image
                  source={Kanguru}
                  resizeMode="contain"
                  style={styles.logo}
                  accessibilityRole="image"
                  accessibilityLabel="Logo Kanguru Finances"
               />
            </ImageBackground>
            <View style={styles.buttonContainer}>
               {usuarioAutenticado ? (
                  <TouchableOpacity
                     accessibilityLabel="Ir para Home"
                     accessibilityRole="button"
                     activeOpacity={0.5}
                     onPress={() => navigation.navigate("Home")}
                     style={styles.buttonAutenticado}>
                     <Text style={{ color: "#fff", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
                        Ir para Home
                     </Text>
                  </TouchableOpacity>
               ) : (
                  <TouchableOpacity
                     accessibilityLabel="Desbloquear"
                     accessibilityHint="Desbloqueia App para uso"
                     accessibilityRole="button"
                     activeOpacity={0.5}
                     onPress={() => autenticarUsuario()}
                     style={styles.button}>
                     <Text style={{ color: "#fa7828", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
                        Desbloquear
                     </Text>
                  </TouchableOpacity>
               )}
            </View>
         </View>
      </>
   )
}
