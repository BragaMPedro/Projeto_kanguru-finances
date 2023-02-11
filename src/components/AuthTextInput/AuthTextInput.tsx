import React, { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "../../screens/Login/styles"

interface AuthTextInputProps {
   label: string
   placeholder: string
   type: "emailAddress" | "username" | "password" | "newPassword"
   value: string
   setValue: React.Dispatch<React.SetStateAction<string>>
}

export const AuthTextInput = ({ label, placeholder, type, value, setValue }: AuthTextInputProps) => {
   const [focus, setFocus] = useState<boolean>(false)
   const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)
   const inputStyle = focus ? styles.inputFocus : styles.inputBox

   if (type === "password") {
      return (
         <View style={inputStyle}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
               <TextInput
                  value={value}
                  onChangeText={e => setValue(e)}
                  style={styles.textinput}
                  secureTextEntry={!passwordVisibility}
                  textContentType={type}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  placeholder={placeholder}
                  placeholderTextColor="#595f70"
               />
               <TouchableOpacity activeOpacity={0.8} onPress={() => setPasswordVisibility(visibility => !visibility)}>
                  {passwordVisibility ? (
                     <MaterialIcons name="visibility" style={styles.passwordIcon} />
                  ) : (
                     <MaterialIcons name="visibility-off" style={styles.passwordIcon} />
                  )}
               </TouchableOpacity>
            </View>
         </View>
      )
   }

   return (
      <View style={inputStyle}>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.input}>
            <TextInput
               value={value}
               onChangeText={e => setValue(e)}
               style={styles.textinput}
               textContentType={type}
               onFocus={() => setFocus(true)}
               onBlur={() => setFocus(false)}
               placeholder={placeholder}
               placeholderTextColor="#595f70"
            />
         </View>
      </View>
   )
}
