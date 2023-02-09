import { StyleSheet, Dimensions, StatusBar } from "react-native"

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({

container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    padding: 16,
    backgroundColor: "#3E3C42",
 },
 buttonAutenticado: {
    height: 50,
    width: 252,
    backgroundColor: '#fa7828',
    borderRadius: 50,
    justifyContent: "center",
    marginVertical: 8,
 },
})