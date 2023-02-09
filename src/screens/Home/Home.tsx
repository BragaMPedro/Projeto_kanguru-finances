import { useState, useEffect } from "react"
import { FunctionsHome } from './functions'
import { Text, View, TouchableOpacity, Alert, FlatList } from "react-native"

import { styles } from "./styles"
import { PagamentoProps } from "../../services/PagamentosService"

export const Home = () => {
   const [pagamentoArray, setPagamentoArray] = useState<PagamentoProps[]>([])
 
   const { pegarPagamentos, } = FunctionsHome({pagamentoArray, setPagamentoArray})

   useEffect(()=>{
      pegarPagamentos()
   },[])

   return (
      <View style={styles.container}>
         <Text style={{ color: "#fff", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
            Página Home maneirissima aqui
         </Text>
      </View>
   )
}
