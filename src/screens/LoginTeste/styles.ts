import { StyleSheet, Dimensions, StatusBar } from "react-native"

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight,
      padding: 16,
      backgroundColor: "#3E3C42",
   },
   logoContainer: {
      flex: 0.3,
      justifyContent: "center",
      alignContent: "center",
   },
   logo: {
      width: 160,
      height: 160,
   },
   buttonContainer: {
      height: height,
      width: width,
      justifyContent: "flex-end",
      alignItems: "center",
      padding: 16,
      position: "absolute",
   },
   button: {
      height: 50,
      width: 252,
      backgroundColor: '#e9e9e9',
      borderRadius: 50,
      justifyContent: "center",
   },
   buttonAutenticado: {
      height: 50,
      width: 252,
      backgroundColor: '#fa7828',
      borderRadius: 50,
      justifyContent: "center",
   },
});
