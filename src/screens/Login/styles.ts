import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 64 : 40,
        paddingHorizontal: 30,
        backgroundColor: '#1B1D2A',
        color: "#cfd0d5",
    },

    header: {
        felx: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 60,
        height: 30,
        width: 350,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#cfd0d5",
        textAlign: "center",
    },

    content: {
        height: 275,
        width: "100%",
    },

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

    labelAux: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "400",
        color: "#cfd0d5",
    },

    buttonLogin:{
        alignItems: "center",
        width: 280,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: "#242834",
        color: "#cfd0d5",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    }

})