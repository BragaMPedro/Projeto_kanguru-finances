import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    label: {
        textAlign: "left",
        fontSize: 12,
        fontWeight: "400",
        color: "#cfd0d5",
    },

    inputBox:{
        marginVertical: 22.5,
        borderBottomWidth: 2,
        borderBottomColor: "#242834",
    },
    input:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        paddingRight: 16,
    },
    textinput: {
        width: "100%",
        color: "#cfd0d5",
        fontSize: 16,
        textDecorationLine: "none",
    },
    passwordIcon: {
        color: "#cfd0d5",
        fontSize: 16,
    },
    inputFocus:{
        marginVertical: 22.5,
        borderBottomWidth: 2,
        borderBottomColor: "#5f81fc",
    },
})