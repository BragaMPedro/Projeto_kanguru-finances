import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 64 : 40,
        paddingHorizontal: 40,
        backgroundColor: '#1B1D2A',
        color: "#cfd0d5",
    },

    header: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
    },
    logo: {
        width: 160,
        height: 160,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#cfd0d5",
        textAlign: "center",
    },

    content: {
        flex: 1,
        flexDirection: 'column'
    },

    label: {
        textAlign: "left",
        fontSize: 12,
        fontWeight: "400",
        color: "#cfd0d5",
    },

    inputBox: {
        marginVertical: 22.5,
        borderBottomWidth: 2,
        borderBottomColor: "#242834",
    },
    input: {
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
        fontSize: 20,
    },
    inputFocus: {
        marginVertical: 22.5,
        borderBottomWidth: 2,
        borderBottomColor: "#fa7828",
    },

    labelAux: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "400",
        color: "#cfd0d5",
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        zIndex: 0,
    },
    buttonLogin: {
        alignItems: "center",
        width: 280,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: "#fa7828",
        color: "#cfd0d5",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },

    buttonDisabled: {
        alignItems: "center",
        width: 280,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: "#242834",
        color: "#cfd0d5",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },

})