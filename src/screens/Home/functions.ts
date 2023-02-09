import { useState } from "react"
import { Alert } from "react-native"
import { getTodosPagamentos, PagamentoProps } from "../../services/PagamentosService"

interface FunctionsHomeProps {
   pagamentoArray: PagamentoProps[]
   setPagamentoArray: React.Dispatch<React.SetStateAction<PagamentoProps[]>>
}

export const FunctionsHome = ({ pagamentoArray, setPagamentoArray }: FunctionsHomeProps) => {
   function pegarPagamentos() {
      getTodosPagamentos()
         .then(res => {
            setPagamentoArray(res.data.results)
            console.log(res.data.results)
         })
         .catch(err => {
            console.log(err)
            Alert.alert(err.response.status, err.message)
         })
   }

   return {
      pegarPagamentos,
   }
}
