import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { AuthTextInput } from "../../components/AuthTextInput/AuthTextInput"
import { styles } from "./styles"

import { FunctionsLogin } from "./functions"

export const LoginScreen = () => {
   const [username, setUsername] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const { fazerLogin } = FunctionsLogin()

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>Login</Text>
         </View>

         <View style={styles.content}>
            <AuthTextInput label="Usuário" placeholder="Usuário" type="username" value={username} setValue={setUsername} />
            <AuthTextInput label="Senha" placeholder="Senha" type="password" value={password} setValue={setPassword} />

            <Text style={styles.labelAux}>Esqueci a Senha</Text>
         </View>

         <TouchableOpacity style={styles.buttonLogin} onPress={() => fazerLogin(username, password)}>
            <Text style={styles.title}>Login</Text>
         </TouchableOpacity>
      </View>
   )
}
