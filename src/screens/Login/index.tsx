import React, { useState } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native"
import { AuthTextInput } from "../../components/AuthTextInput/AuthTextInput"
import { FunctionsLogin } from "./functions"

import { Kanguru } from '../../assets/logo/pngwing.com.png'
import { styles } from "./styles"


export const LoginScreen = () => {
   const [username, setUsername] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [carregando, setCarregando] = useState<boolean>(false)
   const { fazerLogin } = FunctionsLogin({ carregando, setCarregando })

   let disabled = (username && password) === '' || carregando

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image
               source={Kanguru}
               resizeMode="contain"
               style={styles.logo}
               accessibilityRole="image"
               accessibilityLabel="Logo Kanguru Finances"
            />
         </View>

         <View style={styles.content}>
            <AuthTextInput label="Usuário" placeholder="Usuário" type="username" value={username} setValue={setUsername} />
            <AuthTextInput label="Senha" placeholder="Senha" type="password" value={password} setValue={setPassword} />

            <Text style={styles.labelAux}>Esqueci a Senha</Text>
         </View>

         <View style={styles.buttonContainer}>
            <TouchableOpacity disabled={disabled} style={disabled ? styles.buttonDisabled : styles.buttonLogin} onPress={() => fazerLogin(username, password)}>
               {carregando ?
                  <ActivityIndicator color="#fa7828" />
                  : <Text style={styles.title}>Login</Text>}
            </TouchableOpacity>
         </View>
      </View>
   )
}
