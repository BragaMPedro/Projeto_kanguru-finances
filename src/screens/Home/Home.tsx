import { useState, useEffect } from "react"
import { FunctionsHome } from "./functions"
import { Text, View, TouchableOpacity, Alert, FlatList } from "react-native"

import { styles } from "./styles"
import { PagamentoProps } from "../../services/PagamentosService"
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars"

export const Home = () => {
   const [pagamentoArray, setPagamentoArray] = useState<PagamentoProps[]>([])

   const { pegarPagamentos } = FunctionsHome({ pagamentoArray, setPagamentoArray })

   // useEffect(()=>{
   //    pegarPagamentos()
   // },[])

   LocaleConfig.locales["pt-BR"] = {
      monthNames: [
         "Janeiro",
         "Fevereiro",
         "Março",
         "Abril",
         "Maio",
         "Junho",
         "Julho",
         "Agosto",
         "Setembro",
         "Outubro",
         "Novembro",
         "Dezembro",
      ],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul.", "Ago", "Set.", "Out.", "Nov.", "Dec."],
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
      today: "Hoje",
   }
   LocaleConfig.defaultLocale = "pt-BR"


   return (
      <View style={styles.container}>
         {/* <View style={styles.calendarContainer}> */}
         <Calendar
            minDate={ `2023-${new Date().getMonth()}-01`}
            maxDate={ `2023-${new Date().getMonth() + 2}-01`}
            hideExtraDays
            displayLoadingIndicator={false}
            style={styles.calendar}
            calendarWidth={300}
            firstDay={7}
            monthFormat={"dd MMMM"}
         />
         {/* </View> */}
         <View style={styles.content}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
               Página Home maneirissima aqui
            </Text>
         </View>
      </View>
   )
}
