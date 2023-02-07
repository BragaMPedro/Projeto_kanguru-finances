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
})