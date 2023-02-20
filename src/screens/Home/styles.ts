import { StyleSheet, Dimensions, StatusBar } from "react-native"

const { height, width } = Dimensions.get("window")

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight + 5,
      backgroundColor: "#3E3C42",
   },
   calendarContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   calendar:{
      width: 314,
      borderRadius: 10,
   },
   content: {
      flex: 1.37,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      elevation: 3,
   },
})
